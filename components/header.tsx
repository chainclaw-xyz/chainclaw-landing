"use client";

import { GithubIcon } from "./ui/icons";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#skills", label: "Skills" },
  { href: "#use-cases", label: "Use Cases" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight font-mono">
          ChainClaw
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/chainclaw-xyz/chainclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="#get-started"
            className="hidden sm:inline-flex items-center h-9 px-4 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
