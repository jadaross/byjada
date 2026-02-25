"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#C4748A", "#D4622B", "#C4882A", "#A84B2B", "#7A2E45"];

export default function CursorSparkle() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const createSparkle = (x: number, y: number) => {
      const el = document.createElement("div");
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const size = Math.random() * 8 + 4;
      const angle = Math.random() * 360;
      const dist = Math.random() * 20 + 5;

      el.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%) rotate(${angle}deg) translateX(${dist}px);
        animation: sparkle-fade 0.55s ease-out forwards;
        z-index: 9999;
      `;
      container.appendChild(el);
      setTimeout(() => el.remove(), 600);
    };

    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - last > 55) {
        createSparkle(e.clientX, e.clientY);
        last = now;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={containerRef} aria-hidden="true" />;
}
