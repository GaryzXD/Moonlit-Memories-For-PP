import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMusic } from "./music";
import { useSettings } from "./settings";

const SLIDES = [
  "For the past few days & sleepless nights\nI've been quietly making this little corner of the internet just for you.",
  "Every photo. Every joke.\nEvery tiny detail.",
  "…because somehow, in such a short time,\nyou've made my days a whole lot brighter.",
  "I still remember finding you on Equals.\nI never imagined a random app woulld show me you & it\nwould turn into hours of conversations\nand my favourite calls.",
  "It's kind of crazy,\nhow someone you've only known for such a short time\ncan already feel this important.",
  "I've been keeping one little secret\nthroughout this whole website.\n\nI didn't build all of this only because it's your birthday.( I mean that is still the main reason )\nI also built it because…\n\nI Love You.",
  "I'd love to stop calling you\n'the girl I met on Equals.'",
];

export function Proposal({ onClose }: { onClose: () => void }) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"slides" | "ask" | "yes">("slides");
  const music = useMusic();
  const { update } = useSettings();

  useEffect(() => { music.duckTo(0.2); }, []);

  // Kick off the finale track the moment the last proposal slide appears.
  useEffect(() => {
    if (i === SLIDES.length - 1) {
      music.playFinale();
      music.duckTo(0.55);
    }
  }, [i]);

  const next = () => {
    if (i < SLIDES.length - 1) setI(i + 1);
    else setPhase("ask");
  };

  const acceptYes = () => {
    setPhase("yes");
    update({ effectsLevel: "increased", hearts: true, fireflies: true, particles: true });
    music.duckTo(0.6);
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center px-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      style={{ background: "radial-gradient(ellipse at center, rgba(3,11,24,0.7), rgba(3,11,24,0.95))" }}
    >
      <div className="max-w-2xl w-full text-center">
        {phase === "slides" && (
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <p className="serif text-2xl md:text-4xl leading-relaxed text-glow whitespace-pre-line">
                {SLIDES[i]}
              </p>
              <button
                onClick={next}
                className="mt-12 opacity-70 hover:opacity-100 text-sm tracking-[0.3em] uppercase transition"
              >Continue →</button>
              <div className="mt-6 flex justify-center gap-2">
                {SLIDES.map((_, k) => (
                  <span key={k} className={`h-1 rounded-full transition-all ${k === i ? "w-8 bg-[--color-glow]" : "w-2 bg-white/20"}`} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {phase === "ask" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="serif italic opacity-70 text-lg">Pakeeza…</p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="serif text-5xl md:text-7xl text-glow mt-6 leading-tight"
            >
              Will you be my girlfriend? <span className="text-[#ff5c8a]">❤</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}
              className="mt-12 flex flex-wrap gap-4 justify-center"
            >
              <button onClick={acceptYes} className="btn-glow btn-glow-hover px-10 py-4 rounded-full serif text-xl">
                💖 Yes
              </button>
              <button
                onClick={() => { setI(0); setPhase("slides"); }}
                className="glass px-8 py-4 rounded-full serif text-lg opacity-80 hover:opacity-100"
              >
                No????????????👀 ( Try it )
              </button>
            </motion.div>
          </motion.div>
        )}

        {phase === "yes" && <YesEnding onDone={onClose} />}
      </div>

      {phase === "yes" && <HeartConfetti />}
    </motion.div>
  );
}

function YesEnding({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const ts = [
      setTimeout(() => setStep(1), 2400),
      setTimeout(() => setStep(2), 5200),
      setTimeout(() => setStep(3), 8200),
    ];
    return () => ts.forEach(clearTimeout);
  }, []);
  const lines = [
    "You just made this the happiest moment of my year. 💙",
    "Happy 20th Birthday, Pakeeza Pervaiz.",
    "Thank you for exploring The Museum of Us.",
    "This is only Chapter One.",
  ];
  return (
    <div className="space-y-8">
      {lines.slice(0, step + 1).map((l, i) => (
        <motion.p
          key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className={`serif text-glow ${i === 3 ? "italic text-2xl md:text-3xl mt-12" : "text-2xl md:text-4xl leading-relaxed"}`}
        >{l}</motion.p>
      ))}
    </div>
  );
}

function HeartConfetti() {
  const hearts = Array.from({ length: 40 }, (_, i) => ({
    id: i, x: Math.random() * 100, delay: Math.random() * 3, dur: 5 + Math.random() * 4, s: 0.6 + Math.random(),
  }));
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute text-[#5DAEFF]"
          style={{
            left: `${h.x}%`, bottom: 0, transform: `scale(${h.s})`,
            animation: `rise ${h.dur}s ease-out ${h.delay}s forwards`,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ filter: "drop-shadow(0 0 8px #5DAEFF)" }}>
            <path d="M12 21s-7-4.5-9.5-9C.8 8.6 2.7 5 6 5c2 0 3.5 1 4 2 .5-1 2-2 4-2 3.3 0 5.2 3.6 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
          </svg>
        </span>
      ))}
    </div>
  );
}
