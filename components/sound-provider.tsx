"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

type SoundContextValue = {
  playScroll: () => void;
  playInteract: () => void;
  playAmbient: () => void;
  enabled: boolean;
  toggleEnabled: () => void;
};

const SoundContext = createContext<SoundContextValue | undefined>(undefined);

function createAudioContext() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return new (window.AudioContext || (window as any).webkitAudioContext)();
  } catch {
    return null;
  }
}

function playTone(
  context: AudioContext,
  frequency: number,
  duration: number,
  type: OscillatorType,
  volume = 0.08,
  detune = 0
) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = type;
  oscillator.frequency.value = frequency;
  oscillator.detune.value = detune;
  oscillator.connect(gain);
  gain.connect(context.destination);

  const now = context.currentTime;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!audioContextRef.current) {
      audioContextRef.current = createAudioContext();
    }
  }, []);

  const ensureContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = createAudioContext();
    }
    if (!audioContextRef.current) return null;
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume().catch(() => {
        /* ignore resume errors */
      });
    }
    return audioContextRef.current;
  }, []);

  const playScroll = useCallback(() => {
    if (!enabled) return;
    const context = ensureContext();
    if (!context) return;
    playTone(context, 220, 0.08, "triangle", 0.06);
  }, [enabled, ensureContext]);

  const playInteract = useCallback(() => {
    if (!enabled) return;
    const context = ensureContext();
    if (!context) return;
    playTone(context, 330, 0.05, "square", 0.12, 20);
  }, [enabled, ensureContext]);

  const playAmbient = useCallback(() => {
    if (!enabled) return;
    const context = ensureContext();
    if (!context) return;
    playTone(context, 140, 0.2, "sine", 0.025);
  }, [enabled, ensureContext]);

  const toggleEnabled = useCallback(() => setEnabled((prev) => !prev), []);

  const value = useMemo(
    () => ({ enabled, playScroll, playInteract, playAmbient, toggleEnabled }),
    [enabled, playScroll, playInteract, playAmbient, toggleEnabled]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within SoundProvider");
  }
  return context;
}
