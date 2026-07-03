import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

import zubaida from "@/assets/audio/You are My Zubaida.m4a";
import ktmbk from "@/assets/audio/KTMBK.m4a";
import maand from "@/assets/audio/Maand - For You.m4a";
import artemas from "@/assets/audio/Artemas Mash.m4a";
import icouldnthelp from "@/assets/audio/I couldnt help.m4a";
import bemybaby from "@/assets/audio/Be my Baby.m4a";

/** Five-act soundtrack + finale. */
export const TRACKS = [
  { id: 0, name: "Act I — You Are My Zubaida",  src: zubaida,      act: "I"   },
  { id: 1, name: "Act II — KTMBK",              src: ktmbk,        act: "II"  },
  { id: 2, name: "Act III — Maand",             src: maand,        act: "III" },
  { id: 3, name: "Act IV — Artemas Mash",       src: artemas,      act: "IV"  },
  { id: 4, name: "Act V — I Couldn't Help",     src: icouldnthelp, act: "V"   },
  { id: 5, name: "Finale — Be My Baby",         src: bemybaby,     act: "VI"  },
];

interface MusicCtx {
  trackIndex: number;
  playing: boolean;
  volume: number;
  requestActChange: (chapter1Indexed: number) => void;
  playFinale: () => void;

  setPlaying: (p: boolean) => void;
  setVolume: (v: number) => void;
  setTrack: (i: number) => void;
  next: () => void;
  prev: () => void;
  duckTo: (v: number) => void;
}

const Ctx = createContext<MusicCtx | null>(null);
export const useMusic = () => useContext(Ctx)!;

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [pendingAct, setPendingAct] = useState<number | null>(null);
  const requestedActsRef = useRef<Set<number>>(new Set([0]));

  useEffect(() => {
    if (!audioRef.current) audioRef.current = new Audio();
    const a = audioRef.current;
    a.src = TRACKS[trackIndex].src;
    a.loop = true;
    a.volume = volume;
    if (playing) a.play().catch(() => {});
    return () => { a.pause(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) a.play().catch(() => {});
    else a.pause();
  }, [playing]);

  useEffect(() => { if (audioRef.current) audioRef.current.volume = volume; }, [volume]);

  const requestActChange = (chapter: number) => {
    const act = chapter <= 4 ? 0 : chapter <= 8 ? 1 : chapter <= 12 ? 2 : chapter <= 16 ? 3 : 4;
    if (requestedActsRef.current.has(act)) return;
    requestedActsRef.current.add(act);
    if (act === trackIndex) return;
    setPendingAct(act);
  };

  const acceptAct = () => {
    if (pendingAct == null) return;
    // fade current
    const a = audioRef.current;
    if (a && playing) {
      const start = a.volume;
      const step = start / 20;
      const iv = setInterval(() => {
        if (!a) return clearInterval(iv);
        a.volume = Math.max(0, a.volume - step);
        if (a.volume <= 0.01) { clearInterval(iv); setTrackIndex(pendingAct); a.volume = volume; }
      }, 40);
    } else {
      setTrackIndex(pendingAct);
    }
    setPendingAct(null);
  };

  const duckTo = (v: number) => setVolume(v);

  const playFinale = () => {
    const a = audioRef.current;
    if (a && playing) {
      const step = a.volume / 15;
      const iv = setInterval(() => {
        if (!a) return clearInterval(iv);
        a.volume = Math.max(0, a.volume - step);
        if (a.volume <= 0.01) {
          clearInterval(iv);
          setTrackIndex(5);
          a.volume = volume;
        }
      }, 40);
    } else {
      setTrackIndex(5);
      setPlaying(true);
    }
  };

  return (
    <Ctx.Provider value={{
      trackIndex, playing, volume,
      setPlaying, setVolume, requestActChange, duckTo, playFinale,
      setTrack: (i) => setTrackIndex(i),
      next: () => setTrackIndex((i) => (i + 1) % TRACKS.length),
      prev: () => setTrackIndex((i) => (i - 1 + TRACKS.length) % TRACKS.length),
    }}>
      {children}
      <AnimatePresence>
        {pendingAct !== null && (
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 glass-strong rounded-2xl p-6 w-[min(420px,92vw)]"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Now entering Act {TRACKS[pendingAct].act}</p>
            <p className="serif text-2xl mt-2 text-glow">The next chapter has its own soundtrack.</p>
            <p className="text-sm opacity-70 mt-2">Now playing: <span className="italic">{TRACKS[pendingAct].name}</span></p>
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => { setPlaying(true); acceptAct(); }}
                className="btn-glow btn-glow-hover px-5 py-2 rounded-full text-sm"
              >▶ Continue with music</button>
              <button
                onClick={() => setPendingAct(null)}
                className="glass px-5 py-2 rounded-full text-sm opacity-80 hover:opacity-100"
              >Skip</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
