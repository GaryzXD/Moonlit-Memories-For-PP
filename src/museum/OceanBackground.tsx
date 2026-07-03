import { useSettings, speedMultiplier } from "./settings";
import { useEffect, useMemo, useRef } from "react";

/** Full-viewport calm-ocean-at-night background. Pure CSS + SVG for perf. */
export function OceanBackground() {
  const { settings } = useSettings();
  const mult = speedMultiplier(settings.speed);
  const paused = settings.paused ? "paused" : "running";

  // Precompute stars once
  const stars = useMemo(
    () =>
      Array.from({ length: 140 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 55,
        s: Math.random() * 1.6 + 0.4,
        d: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      })),
    []
  );

  const clouds = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => ({
        id: i,
        top: 4 + i * 6,
        duration: 90 + i * 40,
        delay: -i * 20,
        opacity: 0.06 + Math.random() * 0.06,
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, #0F4C81 0%, #071A33 40%, #030B18 80%)",
        }}
      />

      {/* Stars */}
      {settings.particles &&
        stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.s,
              height: s.s,
              opacity: 0.6,
              animation: `twinkle ${s.d * mult}s ease-in-out ${s.delay}s infinite`,
              animationPlayState: paused,
              boxShadow: "0 0 4px rgba(165,216,255,0.8)",
            }}
          />
        ))}

      {/* Moon */}
      <Moon />

      {/* Clouds */}
      {clouds.map((c) => (
        <div
          key={c.id}
          className="absolute w-[40%] h-24 rounded-full blur-3xl"
          style={{
            top: `${c.top}%`,
            left: 0,
            background: "rgba(165, 216, 255, 0.6)",
            opacity: c.opacity,
            animation: `drift ${c.duration * mult}s linear ${c.delay}s infinite`,
            animationPlayState: paused,
          }}
        />
      ))}

      {/* Fog */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 blur-2xl"
        style={{ background: "linear-gradient(to top, rgba(93,174,255,0.15), transparent)" }}
      />

      {/* Ocean */}
      <Ocean />
    </div>
  );
}

function Moon() {
  const clicksRef = useRef(0);
  return (
    <button
      onClick={() => {
        clicksRef.current++;
        if (clicksRef.current === 3) {
          // easter egg
          const el = document.createElement("div");
          el.textContent = "The moon remembers you ✦";
          el.className =
            "fixed top-1/3 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-full glass-strong text-glow serif text-xl";
          document.body.appendChild(el);
          setTimeout(() => el.remove(), 3500);
          clicksRef.current = 0;
        }
      }}
      aria-label="Moon"
      className="absolute pointer-events-auto"
      style={{
        top: "8%",
        right: "12%",
        width: 120,
        height: 120,
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 35% 35%, #F8FAFC, #A5D8FF 60%, #5DAEFF 100%)",
        animation: "moon-pulse 6s ease-in-out infinite",
        cursor: "pointer",
      }}
    />
  );
}

function Ocean() {
  const { settings } = useSettings();
  const mult = speedMultiplier(settings.speed);
  const paused = settings.paused ? "paused" : "running";
  const layers = [
    { top: 55, color: "rgba(15, 76, 129, 0.45)", dur: 14, height: 220 },
    { top: 62, color: "rgba(15, 76, 129, 0.55)", dur: 18, height: 260 },
    { top: 70, color: "rgba(7, 26, 51, 0.75)", dur: 22, height: 340 },
    { top: 80, color: "rgba(3, 11, 24, 0.9)", dur: 26, height: 420 },
  ];
  return (
    <>
      {/* Moon reflection */}
      <div
        className="absolute blur-xl"
        style={{
          top: "58%",
          right: "10%",
          width: 140,
          height: 40,
          background:
            "radial-gradient(ellipse, rgba(165,216,255,0.6), transparent 70%)",
        }}
      />
      {layers.map((l, i) => (
        <svg
          key={i}
          className="absolute left-0 w-[220%]"
          style={{
            top: `${l.top}%`,
            height: l.height,
            animation: `wave ${l.dur * mult}s ease-in-out infinite`,
            animationPlayState: paused,
          }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill={l.color}
            d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,165.3C840,181,960,171,1080,144C1200,117,1320,75,1380,53.3L1440,32L1440,320L0,320Z"
          />
        </svg>
      ))}
    </>
  );
}
