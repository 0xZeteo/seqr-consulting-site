"use client";

import { useEffect, useRef } from "react";
import { useSound } from "@/components/sound-provider";

export function SoundShell({ children }: { children: React.ReactNode }) {
  const lastScrollRef = useRef<number>(0);
  const lastInteractRef = useRef<number>(0);

  const { playScroll, playInteract, playAmbient, enabled, toggleEnabled } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      const now = performance.now();
      if (now - lastScrollRef.current < 350) return;
      lastScrollRef.current = now;
      playScroll();
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const interactive = target.closest(
        "button,a,input,textarea,select,label,[role='button'],[role='link']"
      );
      if (!interactive) return;

      const now = performance.now();
      if (now - lastInteractRef.current < 250) return;
      lastInteractRef.current = now;
      playInteract();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [playScroll, playInteract]);

  useEffect(() => {
    if (!enabled) return;
    const interval = window.setInterval(() => {
      playAmbient();
    }, 22000);
    return () => window.clearInterval(interval);
  }, [enabled, playAmbient]);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 rounded-full border border-white/10 bg-black/75 p-3 text-sm text-white shadow-lg shadow-black/20 backdrop-blur-md">
        <button
          type="button"
          onClick={toggleEnabled}
          className="rounded-full bg-white/10 px-3 py-1 transition hover:bg-white/20"
        >
          {enabled ? "Sound On" : "Sound Off"}
        </button>
      </div>
      {children}
    </>
  );
}
