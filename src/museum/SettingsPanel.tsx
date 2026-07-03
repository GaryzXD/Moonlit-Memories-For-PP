import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSettings, type Speed } from "./settings";

export function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const { settings, update } = useSettings();

  const Toggle = ({ k, label }: { k: keyof typeof settings; label: string }) => (
    <label className="flex items-center justify-between text-sm py-1.5">
      <span className="opacity-80">{label}</span>
      <button
        onClick={() => update({ [k]: !settings[k] } as any)}
        className={`w-10 h-5 rounded-full transition ${settings[k] ? "bg-[--color-accent-blue]" : "bg-white/10"}`}
      >
        <span className={`block w-4 h-4 rounded-full bg-white transition ${settings[k] ? "translate-x-5" : "translate-x-0.5"}`} />
      </button>
    </label>
  );

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="glass-strong rounded-2xl p-5 mb-2 w-72"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-2">Ambience</div>
            <Toggle k="lanterns" label="Lanterns" />
            <Toggle k="fireflies" label="Fireflies" />
            <Toggle k="bubbles" label="Bubbles" />
            <Toggle k="hearts" label="Floating hearts" />
            <Toggle k="fish" label="Glowing fish" />
            <Toggle k="particles" label="Stars & particles" />
            <Toggle k="floatingFaces" label="Floating Pakeezas" />

            <div className="border-t border-white/10 my-3" />
            <Toggle k="paused" label="Pause all motion" />

            <div className="mt-3">
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-1">Speed</div>
              <div className="flex gap-1">
                {(["slow", "normal", "fast"] as Speed[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => update({ speed: s })}
                    className={`flex-1 text-xs py-1.5 rounded-lg capitalize transition ${settings.speed === s ? "glass text-glow" : "hover:bg-white/5 opacity-70"}`}
                  >{s}</button>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-1">Effects</div>
              <div className="flex gap-1">
                {(["reduced", "normal", "increased"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => update({ effectsLevel: s })}
                    className={`flex-1 text-xs py-1.5 rounded-lg capitalize transition ${settings.effectsLevel === s ? "glass text-glow" : "hover:bg-white/5 opacity-70"}`}
                  >{s}</button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((o) => !o)}
        className="glass-strong w-11 h-11 rounded-full flex items-center justify-center hover:scale-105 transition"
        aria-label="Settings"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>
    </div>
  );
}
