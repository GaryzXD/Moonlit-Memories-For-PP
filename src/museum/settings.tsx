import { createContext, useContext, useState, type ReactNode } from "react";

export type Speed = "slow" | "normal" | "fast";

export interface MuseumSettings {
  lanterns: boolean;
  fireflies: boolean;
  bubbles: boolean;
  hearts: boolean;
  fish: boolean;
  particles: boolean;
  floatingFaces: boolean;
  paused: boolean;
  speed: Speed;
  effectsLevel: "reduced" | "normal" | "increased";
}

const DEFAULT: MuseumSettings = {
  lanterns: true,
  fireflies: true,
  bubbles: true,
  hearts: true,
  fish: true,
  particles: true,
  floatingFaces: true,
  paused: false,
  speed: "normal",
  effectsLevel: "normal",
};

interface Ctx {
  settings: MuseumSettings;
  update: (patch: Partial<MuseumSettings>) => void;
}

const SettingsCtx = createContext<Ctx>({ settings: DEFAULT, update: () => {} });

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<MuseumSettings>(DEFAULT);
  return (
    <SettingsCtx.Provider
      value={{ settings, update: (p) => setSettings((s) => ({ ...s, ...p })) }}
    >
      {children}
    </SettingsCtx.Provider>
  );
}

export const useSettings = () => useContext(SettingsCtx);

export function speedMultiplier(s: Speed): number {
  return s === "slow" ? 1.8 : s === "fast" ? 0.55 : 1;
}
