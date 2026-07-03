import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Stage = "wish" | "invite" | "ticket";

export function Ticket({ onEnter }: { onEnter: () => void }) {
  const [stage, setStage] = useState<Stage>("wish");
  const [torn, setTorn] = useState(false);
  const [vw, setVw] = useState(1200);

  useEffect(() => {
    const measure = () => setVw(window.innerWidth);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleTear = () => {
    setTorn(true);
    setTimeout(onEnter, 1400);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="wait">
        {stage === "wish" && <WishScreen key="wish" onNext={() => setStage("invite")} />}
        {stage === "invite" && <InviteScreen key="invite" onYes={() => setStage("ticket")} />}
        {stage === "ticket" && (
          <TicketScreen key="ticket" torn={torn} vw={vw} onTear={handleTear} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function WishScreen({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1 }}
      className="text-center max-w-2xl"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        className="text-[10px] md:text-xs tracking-[0.4em] uppercase opacity-60"
      >
        A little something for you
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.4 }}
        className="serif text-5xl md:text-8xl text-glow mt-6 leading-[1.05]"
      >
        Happy Birthday,<br />
        <span className="italic">Pakeeza.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.2 }}
        className="serif italic text-lg md:text-2xl mt-8 opacity-80"
      >
        Twentween looks unreasonably good on you.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.6, duration: 1 }}
        onClick={onNext}
        className="mt-16 btn-glow btn-glow-hover px-8 py-3 rounded-full serif text-lg tracking-wide"
      >
        Continue →
      </motion.button>
    </motion.div>
  );
}

function InviteScreen({ onYes }: { onYes: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1 }}
      className="text-center max-w-2xl"
    >
      <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">something odd just happened</p>
      <h2 className="serif text-4xl md:text-6xl text-glow mt-6 leading-tight">
        I found a ticket<br />to a museum.
      </h2>
      <p className="serif italic text-lg md:text-2xl mt-8 opacity-80">
        It has your name on it.<br />
        Do you want to visit?
      </p>
      <div className="mt-14 flex flex-wrap gap-4 justify-center">
        <button
          onClick={onYes}
          className="btn-glow btn-glow-hover px-10 py-4 rounded-full serif text-xl tracking-wide"
        >
          Yes, take me there →
        </button>
      </div>
      <p className="text-xs opacity-40 mt-8 italic">(you should. trust me. It'll be worth the walk)</p>
    </motion.div>
  );
}

function TicketScreen({
  torn,
  vw,
  onTear,
}: {
  torn: boolean;
  vw: number;
  onTear: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-3xl"
    >
      {/* Ticket faces */}
      <div className="relative" style={{ minHeight: 420 }}>
        {/* Left half — animates out on tear */}
        <motion.div
          className="absolute inset-0"
          animate={torn ? { x: -vw, rotate: -8, opacity: 0 } : { x: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
          style={{
            clipPath:
              "polygon(0 0, 62% 0, 58% 20%, 62% 40%, 58% 60%, 62% 80%, 58% 100%, 0 100%)",
          }}
        >
          <TicketFace />
        </motion.div>
        {/* Right half — animates out on tear */}
        <motion.div
          className="absolute inset-0"
          animate={torn ? { x: vw, rotate: 8, opacity: 0 } : { x: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
          style={{
            clipPath:
              "polygon(62% 0, 100% 0, 100% 100%, 58% 100%, 62% 80%, 58% 60%, 62% 40%, 58% 20%)",
          }}
        >
          <TicketFace />
        </motion.div>
      </div>

      {/* Tear button lives OUTSIDE the clipped halves so it's always visible */}
      {!torn && (
        <div className="absolute inset-x-0 -bottom-6 flex justify-center pointer-events-none">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            onClick={onTear}
            className="btn-glow btn-glow-hover pointer-events-auto px-8 py-4 rounded-full serif text-lg tracking-wide shadow-2xl"
          >
            ✂ Tear ticket & enter
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}

function TicketFace() {
  return (
    <div
      className="w-full h-full glass-strong rounded-2xl overflow-hidden"
      style={{ minHeight: 420 }}
    >
      <div className="grid grid-cols-[1fr_auto_2fr] h-full">
        <div className="p-8 flex flex-col justify-between">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-glow opacity-70">Admit One</p>
            <p className="serif text-3xl mt-4 text-glow">The Museum of Us</p>
          </div>
          <div className="text-xs opacity-70 space-y-1">
            <div>Seat: 01 · Row A</div>
            <div>Doors: Tonight</div>
          </div>
        </div>
        <div className="border-l border-dashed border-white/20 h-full" />
        <div className="p-10 flex flex-col justify-between">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Museum Ticket</p>
            <h1 className="serif text-5xl md:text-6xl mt-3 text-glow leading-none">
              Pakeeza<br />
              Pervaiz
            </h1>
            <p className="serif italic mt-4 text-lg opacity-80">Twentween Birthday Edition</p>
            <p className="text-sm mt-6 opacity-70 max-w-md">
              Twenty chapters. One beautiful beginning.
              <br />
              Please take your time. Nothing here is in a hurry.
            </p>
          </div>
          <div className="mt-8 h-14" />
        </div>
      </div>
    </div>
  );
}
