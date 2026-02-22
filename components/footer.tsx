import { GithubIcon } from "./ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="text-sm font-bold font-mono tracking-tight text-neutral-900">
            ChainClaw
          </span>
          <span className="text-xs text-neutral-400">
            Self-hosted. Open source. Your keys, your agent.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/chainclaw-xyz/chainclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <span className="text-xs text-neutral-400">
            &copy; 2026 ChainClaw. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
