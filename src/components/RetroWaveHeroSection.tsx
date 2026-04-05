"use client";

import { useEffect, useRef, useState } from "react";

type RetroWaveHeroSectionProps = {
  children: React.ReactNode;
};

export function RetroWaveHeroSection({ children }: RetroWaveHeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [shift, setShift] = useState(0);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setMotionOk(!mq.matches);
    updateMotion();
    mq.addEventListener("change", updateMotion);
    return () => mq.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (!motionOk) return;

    let raf = 0;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const cap = rect.height * 0.85;
      setShift(Math.min(scrolled, cap));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [motionOk]);

  const skyY = motionOk ? shift * 0.06 : 0;
  const starsY = motionOk ? shift * 0.04 : 0;
  const sunY = motionOk ? shift * 0.2 : 0;
  const hillsY = motionOk ? shift * 0.35 : 0;
  const gridY = motionOk ? shift * 0.55 : 0;
  const glowY = motionOk ? shift * 0.1 : 0;

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-[min(92vh,880px)] overflow-hidden px-6 pb-24 pt-16 md:min-h-[min(95vh,920px)] md:pb-28 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Niebo */}
        <div
          className="absolute inset-0 bg-linear-to-b from-[#1a0638] via-[#351060] to-[#ff2a6d]/38"
          style={{ transform: `translate3d(0, ${skyY}px, 0)` }}
        >
          {motionOk ? (
            <div className="retro-sky-shimmer absolute inset-0" aria-hidden />
          ) : null}
        </div>

        {/* Gwiazdy */}
        <div
          className={`retro-wave-stars absolute inset-0 opacity-[0.35]${motionOk ? " retro-wave-stars--live" : ""}`}
          style={{ transform: `translate3d(0, ${starsY}px, 0)` }}
        />

        {/* Słońce retro — parallax na obudowie, animacje na dysku */}
        <div
          className="absolute left-1/2 aspect-square w-[min(42vw,260px)] md:w-[min(38vw,300px)]"
          style={{
            bottom: "clamp(22%, 26vh, 34%)",
            transform: `translate(-50%, ${sunY}px)`,
          }}
        >
          <div
            className={
              motionOk ? "retro-sun-disk retro-sun-disk--live" : "retro-sun-disk"
            }
          />
        </div>

        {/* Linia horyzontu */}
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: "clamp(18%, 20vh, 26%)",
            transform: `translate3d(0, ${glowY}px, 0)`,
          }}
        >
          <div
            className={`h-px bg-linear-to-r from-transparent via-[#05d9e8] to-transparent shadow-[0_0_20px_#05d9e8,0_0_40px_#ff2a6d]${motionOk ? " retro-horizon-line--live" : ""}`}
          />
        </div>

        {/* Góry / sylwetka */}
        <svg
          className="absolute bottom-[14%] left-[-5%] w-[110%] text-[#1f0d35] md:bottom-[15%]"
          style={{ transform: `translate3d(0, ${hillsY}px, 0)` }}
          viewBox="0 0 1200 140"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,140 L0,95 L180,55 L340,100 L520,35 L720,88 L920,42 L1080,78 L1200,50 L1200,140 Z"
          />
          <path
            fill="#12081f"
            d="M0,140 L0,108 L260,72 L420,118 L640,58 L820,95 L1000,65 L1200,92 L1200,140 Z"
          />
        </svg>

        {/* Druga warstwa wzgórz (bliżej) */}
        <svg
          className="absolute bottom-[10%] left-[-8%] w-[116%] text-[#0a0612]"
          style={{
            transform: `translate3d(0, ${hillsY * 1.08}px, 0)`,
            opacity: 0.92,
          }}
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,100 L0,78 L220,45 L400,88 L580,38 L760,72 L940,48 L1200,68 L1200,100 Z"
          />
        </svg>

        {/* Podłoga — siatka perspektywiczna */}
        <div
          className="absolute bottom-0 left-1/2 w-[220%] max-w-none -translate-x-1/2 md:w-[200%]"
          style={{
            height: "52%",
            transform: `translate3d(-50%, ${gridY}px, 0)`,
          }}
        >
          <div
            className={`retro-wave-floor h-full w-full${motionOk ? " retro-wave-floor--live" : ""}`}
          />
        </div>

        {/* Mgła u podstawy */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#0a0612] via-[#0a0612]/80 to-transparent" />

        {/* CRT + „chrome” sweep — warstwa na wierzchu tła, pod treścią */}
        {motionOk ? (
          <>
            <div className="retro-wave-crt absolute inset-0" />
            <div className="retro-wave-crt-scan" />
            <div className="retro-wave-chrome" />
          </>
        ) : null}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
