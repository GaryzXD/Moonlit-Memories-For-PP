import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function ChapterShell({
  number, title, kicker, children,
}: { number: number; title: string; kicker?: string; children: ReactNode }) {
  return (
    <section
      id={`chapter-${number}`}
      data-chapter={number}
      className="min-h-screen w-full flex items-center justify-center px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        className="w-full max-w-5xl"
      >
        <div className="flex items-baseline gap-4 mb-4">
          <span className="serif italic text-glow opacity-70 text-lg">Chapter {String(number).padStart(2, "0")}</span>
          {kicker && <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">{kicker}</span>}
        </div>
        <h2 className="serif text-5xl md:text-7xl text-glow leading-[0.95] mb-10">{title}</h2>
        <div className="space-y-6 text-lg md:text-xl leading-relaxed opacity-90">{children}</div>
      </motion.div>
    </section>
  );
}

export function Placeholder({ tag, note, aspect = "video" }: { tag: string; note?: string; aspect?: "video" | "square" | "portrait" | "wide" }) {
  const ratio = aspect === "square" ? "aspect-square" : aspect === "portrait" ? "aspect-[3/4]" : aspect === "wide" ? "aspect-[21/9]" : "aspect-video";
  return (
    <div className={`glass rounded-2xl ${ratio} flex flex-col items-center justify-center text-center p-6 my-4`}>
      <div className="text-[10px] uppercase tracking-[0.3em] opacity-60">{tag}</div>
      {note && <div className="serif italic mt-2 opacity-70">{note}</div>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`glass rounded-2xl p-6 ${className}`}>{children}</div>;
}
