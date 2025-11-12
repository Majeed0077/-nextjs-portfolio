"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: "https://www.upwork.com/", label: "Upwork", external: true }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="curved-shell" id="top">
      <div className={`header-pill ${scrolled ? "shrink" : ""}`}>
        <nav className="nav">
          <div className="brand">
            <div className="logo-square" />
            <span>Majeed</span>
            <svg className="brand-curve" viewBox="0 0 200 100">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity=".4" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity=".1" />
                </linearGradient>
              </defs>
              <path d="M10,60 C60,20 120,120 190,30" fill="none" stroke="url(#g)" strokeWidth="20" strokeLinecap="round" />
            </svg>
          </div>

          <ul className="menu">
            {NAV.map(n => (
              <li key={n.label}>
                <Link href={n.href} target={n.external ? "_blank" : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />
        </nav>

        <div className="header-wave">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,32 C200,90 360,-10 540,20 C720,50 920,10 1440,40 L1440,0 L0,0 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
