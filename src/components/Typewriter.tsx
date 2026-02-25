"use client";

import { useState, useEffect } from "react";

// TODO: Customize these to reflect your actual roles / personality
const roles = [
  "software engineer",
  "side-project enthusiast",
  "forever learning",
  "builder of things",
  "coffee-fueled developer",
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[index];

    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        85
      );
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        45
      );
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }
  }, [displayed, deleting, index]);

  return (
    <span className="text-pink font-semibold">
      {displayed}
      <span className="animate-pulse opacity-70">|</span>
    </span>
  );
}
