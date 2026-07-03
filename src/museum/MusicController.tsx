import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMusic, TRACKS } from "./music";

export function MusicController() {
  const m = useMusic();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="glass-strong rounded-2xl p-4 mb-2 w-72"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-2">Soundtrack</div>
            <ul className="space-y-1 mb-3">
              {TRACKS.map((t, i) => (
                <li key={t.id}>
                  <button
                    onClick={() => { m.setPlaying(true); m.setTrack(i); }}
                    className={`w-full text-left text-sm px-3 py-2 rounded-lg transition ${i === m.trackIndex ? "glass text-glow" : "hover:bg-white/5 opacity-70"}`}
                  >
                    <span className="opacity-50 mr-2">Act {t.act}</span>{t.name.split("— ")[1]}
                  </button>
                </li>
              ))}
            </ul>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] opacity-60">Volume</label>
              <input
                type="range" min={0} max={1} step={0.01} value={m.volume}
                onChange={(e) => m.setVolume(parseFloat(e.target.value))}
                className="w-full accent-[--color-accent-blue]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="glass-strong rounded-full px-3 py-2 flex items-center gap-2">
        <IconBtn onClick={m.prev} label="Previous">⏮</IconBtn>
        <IconBtn onClick={() => m.setPlaying(!m.playing)} label={m.playing ? "Pause" : "Play"}>
          {m.playing ? "❚❚" : "▶"}
        </IconBtn>
        <IconBtn onClick={m.next} label="Next">⏭</IconBtn>
        <button
          onClick={() => setOpen((o) => !o)}
          className="text-xs px-3 py-1 rounded-full hover:bg-white/5 max-w-[140px] truncate opacity-80"
          title={TRACKS[m.trackIndex].name}
        >
          {TRACKS[m.trackIndex].name.split("— ")[1]}
        </button>
      </div>
    </div>
  );
}

function IconBtn({ children, onClick, label }: { children: React.ReactNode; onClick: () => void; label: string }) {
  return (
    <button aria-label={label} onClick={onClick} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-sm">
      {children}
    </button>
  );
}
