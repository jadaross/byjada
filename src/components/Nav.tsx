"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/projects", label: "projects" },
  { href: "/timeline", label: "timeline" },
  { href: "/til", label: "TIL" },
  { href: "/blog", label: "blog" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-dark hover:text-pink transition-colors"
        >
          jada<span className="text-pink">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium transition-colors hover:text-pink relative group ${
                pathname === href ? "text-pink" : "text-dark/65"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-pink transition-all duration-300 ${
                  pathname === href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-dark/70 hover:text-dark transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-cream/95 backdrop-blur-md border-t border-dark/10 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-medium text-lg transition-colors hover:text-pink ${
                pathname === href ? "text-pink" : "text-dark/65"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
