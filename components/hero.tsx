import { ArrowRightIcon, GithubIcon } from "./ui/icons";

export function Hero() {
  return (
    <section className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 text-xs text-neutral-500 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Open Source &middot; Self-Hosted &middot; MIT License
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05]">
          Your AI Agent
          <br />
          for DeFi
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-neutral-500 max-w-xl mx-auto leading-relaxed">
          Natural language commands. Transaction safety built in. 15 chains, 22
          skills, zero trust required.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 h-11 px-6 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Get Started
            <ArrowRightIcon />
          </a>
          <a
            href="https://github.com/chainclaw-xyz/chainclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-6 text-sm font-medium text-neutral-700 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
          >
            <GithubIcon size={16} />
            View on GitHub
          </a>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-neutral-950 rounded-xl p-6 text-left font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="text-neutral-500 mb-3">
              # Talk to your wallet in plain English
            </div>
            <div className="text-emerald-400">
              &gt; Swap 0.5 ETH for USDC on Base
            </div>
            <div className="text-neutral-400 mt-2 ml-2">
              Simulating... 0.5 ETH &rarr; 1,497.32 USDC
            </div>
            <div className="text-neutral-400 ml-2">
              Gas: 0.0004 ETH ($1.20)
            </div>
            <div className="text-neutral-400 ml-2">Risk: LOW (8/100)</div>
            <div className="text-neutral-400 ml-2">Guardrails: PASSED</div>
            <div className="text-emerald-400 ml-2 mt-1">
              Confirmed: 0x7a3f...8b2c
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
