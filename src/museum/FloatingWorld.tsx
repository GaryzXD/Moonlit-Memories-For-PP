import { useSettings, speedMultiplier } from "./settings";
import { useMemo } from "react";
import face1 from "@/assets/faces/hari.png";
import face2 from "@/assets/faces/mogger.png";
import face3 from "@/assets/faces/traditional.png";
import face4 from "@/assets/faces/withash.png";
import face5 from "@/assets/faces/cat.png";

const FACE_URLS = [
    face1,
    face2,
    face3,
    face4,
    face5
];

/** Ambient floating world: fireflies, bubbles, hearts, lanterns, fish + PNG face placeholders. */
export function FloatingWorld() {
  const { settings } = useSettings();
  const mult = speedMultiplier(settings.speed);
  const paused = settings.paused ? "paused" : "running";
  const density = settings.effectsLevel === "reduced" ? 0.5 : settings.effectsLevel === "increased" ? 1.8 : 1;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {settings.fireflies && <Layer kind="firefly" count={Math.round(18 * density)} mult={mult} paused={paused} />}
      {settings.bubbles && <Layer kind="bubble" count={Math.round(14 * density)} mult={mult} paused={paused} />}
      {settings.hearts && <Layer kind="heart" count={Math.round(6 * density)} mult={mult} paused={paused} />}
      {settings.fish && <Fish mult={mult} paused={paused} />}
      {settings.lanterns && <Lanterns mult={mult} paused={paused} />}
      {settings.floatingFaces && <FloatingFaces mult={mult} paused={paused} />}
    </div>
  );
}

function Layer({ kind, count, mult, paused }: { kind: string; count: number; mult: number; paused: string }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        d: Math.random() * 12 + 10,
        delay: -Math.random() * 20,
        s: Math.random() * 0.7 + 0.5,
      })),
    [count, kind]
  );

  return (
    <>
      {items.map((it) => {
        const style: React.CSSProperties = {
          left: `${it.x}%`,
          bottom: 0,
          animation: `rise ${it.d * mult}s linear ${it.delay}s infinite`,
          animationPlayState: paused,
          transform: `scale(${it.s})`,
        };
        if (kind === "firefly")
          return (
            <span
              key={it.id}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                ...style,
                background: "rgba(255, 230, 150, 0.9)",
                boxShadow: "0 0 10px rgba(255,230,150,0.9), 0 0 20px rgba(255,200,80,0.6)",
              }}
            />
          );
        if (kind === "bubble")
          return (
            <span
              key={it.id}
              className="absolute w-3 h-3 rounded-full border"
              style={{
                ...style,
                borderColor: "rgba(165,216,255,0.4)",
                background: "rgba(165,216,255,0.08)",
              }}
            />
          );
        if (kind === "heart")
          return (
            <span key={it.id} className="absolute text-[--color-glow]" style={style}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.7">
                <path d="M12 21s-7-4.5-9.5-9C.8 8.6 2.7 5 6 5c2 0 3.5 1 4 2 .5-1 2-2 4-2 3.3 0 5.2 3.6 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
              </svg>
            </span>
          );
        return null;
      })}
    </>
  );
}

function Fish({ mult, paused }: { mult: number; paused: string }) {
  const fish = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        top: 82 + Math.random() * 12,
        dur: 40 + Math.random() * 30,
        delay: -Math.random() * 40,
      })),
    []
  );
  return (
    <>
      {fish.map((f) => (
        <span
          key={f.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: `${f.top}%`,
            left: 0,
            animation: `drift ${f.dur * mult}s linear ${f.delay}s infinite`,
            animationPlayState: paused,
            background: "rgba(93, 174, 255, 0.7)",
            boxShadow: "0 0 8px rgba(93,174,255,0.9)",
          }}
        />
      ))}
    </>
  );
}

function Lanterns({ mult, paused }: { mult: number; paused: string }) {
  const lanterns = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        left: 15 + i * 30,
        dur: 8 + Math.random() * 4,
        delay: -Math.random() * 5,
        top: 10 + Math.random() * 20,
        secret: i === 1,
      })),
    []
  );
  return (
    <>
      {lanterns.map((l) => (
        <button
          key={l.id}
          className="absolute pointer-events-auto group"
          style={{
            left: `${l.left}%`,
            top: `${l.top}%`,
            animation: `float-slow ${l.dur * mult}s ease-in-out ${l.delay}s infinite`,
            animationPlayState: paused,
          }}
          onClick={() => {
            if (l.secret) {
              const el = document.createElement("div");
              el.textContent = "You found me. I've been waiting here. ✦";
              el.className =
                "fixed top-24 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-full glass-strong text-glow serif text-lg";
              document.body.appendChild(el);
              setTimeout(() => el.remove(), 4000);
            }
          }}
          aria-label="Lantern"
        >
          <div className="relative">
            <div
              className="w-6 h-8 rounded-md"
              style={{
                background: "linear-gradient(180deg, #FFD79A, #E89B3C)",
                boxShadow: "0 0 30px rgba(255, 180, 80, 0.6), 0 0 60px rgba(255,180,80,0.3)",
              }}
            />
            <div className="w-px h-8 bg-white/30 mx-auto" />
          </div>
        </button>
      ))}
    </>
  );
}

/** 5 floating PNG placeholders for Pakeeza cut-outs. Each drifts on its own random path. */
function FloatingFaces({ mult, paused }: { mult: number; paused: string }) {
  const faces = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        top: 15 + Math.random() * 55,
        driftDur: 60 + Math.random() * 60,
        wobbleDur: 6 + Math.random() * 6,
        delay: -Math.random() * 80,
        size: 80 + Math.random() * 60,
        special: i === 2,
      })),
    []
  );
  return (
    <>
      {faces.map((f) => (
        <div
          key={f.id}
          className="absolute pointer-events-auto"
          style={{
            top: `${f.top}%`,
            left: 0,
            width: f.size,
            height: f.size,
            animation: `drift-random ${f.driftDur * mult}s linear ${f.delay}s infinite`,
            animationPlayState: paused,
          }}
          onClick={() => {
            if (f.special) {
              alert("You noticed the little one. That's kind of the point. 💙");
            }
          }}
          title={`FACE_FLOATING_IMAGE_0${f.id + 1}`}
        >
          <div
            style={{
              animation: `wobble ${f.wobbleDur * mult}s ease-in-out infinite`,
              animationPlayState: paused,
              width: "100%",
              height: "100%",
            }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{
                boxShadow: "0 0 40px rgba(93,174,255,0.35), 0 0 80px rgba(93,174,255,0.15)",
                opacity: 0.92,
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <img
                src={FACE_URLS[f.id % FACE_URLS.length]}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
