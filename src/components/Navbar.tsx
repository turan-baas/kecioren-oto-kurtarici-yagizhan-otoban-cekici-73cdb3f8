"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#services", label: "Hizmetler" },
  { href: "#reviews", label: "Yorumlar" },
  { href: "#contact", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="font-[var(--font-heading)] text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className={scrolled ? "text-[var(--color-text)]" : "text-white"}>
            Yağızhan
          </span>
          <span className="text-[var(--color-accent)]"> Çekici</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-colors ${
                scrolled
                  ? "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 bg-[var(--color-accent)] text-[var(--color-text)] text-[0.8rem] uppercase tracking-[0.15em] font-medium px-6 py-2.5 rounded-full hover:scale-[1.03] hover:shadow-lg transition-all duration-200"
          >
            İletişim
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
          aria-label="Menü"
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              menuOpen
                ? "rotate-45 translate-y-[1px] bg-white"
                : scrolled
                ? "bg-[var(--color-text)]"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] mt-1.5 transition-all duration-300 ${
              menuOpen
                ? "-rotate-45 -translate-y-[1px] bg-white"
                : scrolled
                ? "bg-[var(--color-text)]"
                : "bg-white"
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-[var(--color-primary)]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-medium tracking-wider uppercase transition-all duration-500"
            style={{
              transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
