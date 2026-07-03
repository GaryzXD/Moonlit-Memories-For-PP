import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { SettingsProvider } from "../museum/settings";
import { MusicProvider, useMusic } from "../museum/music";
import { OceanBackground } from "../museum/OceanBackground";
import { FloatingWorld } from "../museum/FloatingWorld";
import { Ticket } from "../museum/Ticket";
import { MusicController } from "../museum/MusicController";
import { SettingsPanel } from "../museum/SettingsPanel";
import { CHAPTERS, Chapter20 } from "../museum/chapters";
import { Ending } from "../museum/Ending";
import { Proposal } from "../museum/Proposal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Museum of Us — For Pakeeza" },
      { name: "description", content: "Twenty Chapters. One Beautiful Beginning. A handcrafted interactive experience." },
      { property: "og:title", content: "The Museum of Us" },
      { property: "og:description", content: "Twenty chapters. One beautiful beginning." },
    ],
  }),
  component: MuseumPage,
});

function MuseumPage() {
  return (
    <SettingsProvider>
      <MusicProvider>
        <MuseumExperience />
      </MusicProvider>
    </SettingsProvider>
  );
}

type Phase = "ticket" | "museum" | "ending" | "proposal";

function MuseumExperience() {
  const [phase, setPhase] = useState<Phase>("ticket");

  return (
    <>
      <OceanBackground />
      <FloatingWorld />

      <AnimatePresence mode="wait">
        {phase === "ticket" && <Ticket key="t" onEnter={() => setPhase("museum")} />}
      </AnimatePresence>

      {phase === "museum" && <Museum onFinish={() => setPhase("ending")} />}
      {phase === "ending" && <Ending onOpenProposal={() => setPhase("proposal")} />}
      {phase === "proposal" && <Proposal onClose={() => {}} />}

      {phase !== "ticket" && (
        <>
          <MusicController />
          <SettingsPanel />
        </>
      )}
      <EasterEggs />
    </>
  );
}

function Museum({ onFinish }: { onFinish: () => void }) {
  const music = useMusic();

  // Track current chapter via IntersectionObserver → request act change
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-chapter]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const n = Number(e.target.getAttribute("data-chapter"));
            if (!Number.isNaN(n)) music.requestActChange(n);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
    // eslint-disable-next-line
  }, []);

  return (
    <main className="relative z-10">
      <Intro />
      {CHAPTERS.map((C, i) => <C key={i} />)}
      <Chapter20 onFinish={onFinish} />
      <HiddenSeashell />
    </main>
  );
}

function Intro() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-[10px] uppercase tracking-[0.4em] opacity-60">a small museum, for one visitor</p>
      <h1 className="serif text-6xl md:text-8xl text-glow mt-6 leading-none">The Museum of Us</h1>
      <p className="serif italic text-xl md:text-2xl mt-6 opacity-80">Twenty Chapters. One Beautiful Beginning.</p>
      <div className="mt-16 flex flex-col items-center opacity-60">
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent mt-3" />
      </div>
    </section>
  );
}

/** Hidden seashell at bottom of one section — plays a "voice note" placeholder. */
function HiddenSeashell() {
  const [found, setFound] = useState(false);
  return (
    <>
      <button
        onClick={() => setFound(true)}
        aria-label="something small"
        className="fixed bottom-4 right-1/2 translate-x-1/2 w-6 h-6 opacity-30 hover:opacity-100 transition z-30"
        title="…"
      >
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c5 0 9 4 9 9-3-1-6-1-9 0-3-1-6-1-9 0 0-5 4-9 9-9z" /></svg>
      </button>
      <AnimatePresence>
        {found && (
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 glass-strong rounded-2xl p-6 max-w-sm text-center"
            onClick={() => setFound(false)}
          >
            <div className="text-[10px] tracking-[0.3em] uppercase opacity-60">Hidden Voice Note</div>
            <p className="serif italic text-glow text-lg mt-2">"if you found this, you were paying attention. thank you for that. Uh well about that Voice Note... I'll have to personally say it"</p>
            <button className="mt-4 text-xs opacity-60 hover:opacity-100">close</button>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Global keyboard easter egg + hidden compliment heart. */
function EasterEggs() {
  const [compliment, setCompliment] = useState<string | null>(null);
  const compliments = [
    "You are exactly my type, hell you are the only type I have.",
    "Your voice just fills me with joy, you dont know how lucky I am to hear it daily.",
    "The world is unreasonably lucky to have you in it.",
    "I never had a feeling like this before, I never knew I could feel this way about someone.",
    "You dont know how excited and nervous I am to see you.",
    "These past few days were kinda hard cause I wanted to make this for you but I also wanted to spend time with you",
  ];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "p") {
        const el = document.createElement("div");
        el.textContent = "Hi Pakeeza 💙";
        el.className = "fixed top-6 left-1/2 -translate-x-1/2 z-[100] glass-strong px-6 py-3 rounded-full serif text-glow text-lg";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 2500);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <button
        onClick={() => setCompliment(compliments[Math.floor(Math.random() * compliments.length)])}
        className="fixed top-6 right-6 z-30 opacity-30 hover:opacity-100 transition"
        aria-label="hidden heart"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[--color-glow]">
          <path d="M12 21s-7-4.5-9.5-9C.8 8.6 2.7 5 6 5c2 0 3.5 1 4 2 .5-1 2-2 4-2 3.3 0 5.2 3.6 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
        </svg>
      </button>
      <AnimatePresence>
        {compliment && (
          <div
            className="fixed top-16 right-6 z-50 glass-strong rounded-2xl p-4 max-w-xs cursor-pointer"
            onClick={() => setCompliment(null)}
          >
            <p className="serif italic text-glow">{compliment}</p>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
