"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  from?: "bottom" | "left" | "right" | "none";
  delay?: 0 | 100 | 120 | 180 | 200 | 240 | 300 | 360 | 480 | 600;
};

const hiddenClasses = {
  bottom: "translate-y-8 opacity-0",
  left: "-translate-x-8 opacity-0",
  right: "translate-x-8 opacity-0",
  none: "opacity-0",
};

const delayClasses = {
  0: "delay-0",
  100: "delay-100",
  120: "delay-[120ms]",
  180: "delay-[180ms]",
  200: "delay-200",
  240: "delay-[240ms]",
  300: "delay-300",
  360: "delay-[360ms]",
  480: "delay-[480ms]",
  600: "delay-[600ms]",
};

export function Reveal({ children, className = "", from = "bottom", delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${delayClasses[delay]} ${visible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClasses[from]}`}
      onFocusCapture={() => setVisible(true)}
    >
      {children}
    </div>
  );
}
