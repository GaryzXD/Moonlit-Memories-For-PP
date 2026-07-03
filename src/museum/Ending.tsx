import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMusic } from "./music";

/** Post-chapter-20 flow: fake ending → wait → "wait" → reveal button → slideshow → proposal. */
export function Ending({ onOpenProposal }: { onOpenProposal: () => void }) {
  const [stage, setStage] = useState<0 | 1 | 2 | 3 | 4>(0);
  const music = useMusic();

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 3200),   // fade in "thank you for visiting"
      setTimeout(() => setStage(2), 6800),   // "...wait"
      setTimeout(() => setStage(3), 9200),   // "there's one more thing"
      setTimeout(() => { setStage(4); music.duckTo(0.25); }, 11800), // button
    ];
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-2xl space-y-8">
        <AnimatePresence>
          {stage >= 0 && (
            <motion.p
              key="a" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="serif text-2xl md:text-3xl text-glow"
            >
              Thank you for visiting.
            </motion.p>
          )}
          {stage >= 2 && (
            <motion.p key="b" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}
              className="serif italic text-xl opacity-80"
            >…wait.</motion.p>
          )}
          {stage >= 3 && (
            <motion.p key="c" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}
              className="serif text-xl md:text-2xl opacity-90"
            >There's one more thing.</motion.p>
          )}
          {stage >= 4 && (
            <motion.button
              key="d" initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              onClick={onOpenProposal}
              className="btn-glow btn-glow-hover px-10 py-4 rounded-full serif text-xl tracking-wide relative"
              style={{ boxShadow: "0 0 60px rgba(93,174,255,0.6), 0 0 120px rgba(93,174,255,0.3)" }}
            >
              Before you go…
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
