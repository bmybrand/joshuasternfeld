"use client";

import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const nextProgress = scrollableHeight > 0
          ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
          : 0;

        setProgress(nextProgress);
        setVisible(window.scrollY > 120);
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <button
      type="button"
      className={`fixed right-5 bottom-5 z-40 grid h-13 w-13 cursor-pointer place-items-center rounded-full border-0 bg-[#101312]/90 text-white shadow-[0_5px_22px_rgba(0,0,0,.35)] backdrop-blur-sm transition-[opacity,transform,background-color] duration-300 hover:-translate-y-1 hover:bg-black focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f0ef18] motion-reduce:transition-none max-[520px]:right-3 max-[520px]:bottom-3 max-[520px]:h-12 max-[520px]:w-12 ${visible ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"}`}
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="26" cy="26" r="23.5" fill="none" stroke="rgba(255,255,255,.32)" strokeWidth="1.5" />
        <circle cx="26" cy="26" r="23.5" fill="none" pathLength="100" stroke="#f0ef18" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="100" strokeDashoffset={100 - progress} />
      </svg>
      <svg className="relative h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m6 10 6-6 6 6" />
        <path d="M12 4v16" />
      </svg>
    </button>
  );
}
