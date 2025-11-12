"use client";
import { useEffect, useState } from "react";

function getInitialTheme() {
  // Runs during SSR and CSR. Guard for SSR:
  if (typeof window === "undefined") return "dark";
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    const sysDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    return sysDark ? "dark" : "light";
  } catch {
    return "dark";
  }
}

export default function ThemeToggle() {
  // 1) No setState in effects — initialize once here:
  const [theme, setTheme] = useState(getInitialTheme); // "dark" | "light"

  // 2) Sync theme to <html> attribute + localStorage whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  // 3) Toggle handler: update state only
  const onToggle = () => setTheme(theme === "dark" ? "light" : "dark");

  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="btn-ghost toggle"
      onClick={onToggle}
    >
      <span className={`knob ${isDark ? "left" : "right"}`} />
    </button>
  );
}
