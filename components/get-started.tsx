import { configTiers } from "@/lib/data";

export function GetStarted() {
  return (
    <section id="get-started" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Run It in 60 Seconds
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Clone, configure, run. Self-hosted means your keys never leave your
            machine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-neutral-950 rounded-xl p-6 sm:p-8 font-mono text-sm leading-loose overflow-x-auto">
            <div className="text-neutral-500 mb-3"># Clone and build</div>
            <div className="text-neutral-300">
              git clone https://github.com/chainclaw-xyz/chainclaw
            </div>
            <div className="text-neutral-300">cd chainclaw</div>
            <div className="text-neutral-300">npm install</div>
            <div className="text-neutral-300">npx turbo build</div>
            <div className="text-neutral-500 mt-4 mb-3"># Configure</div>
            <div className="text-neutral-300">cp .env.example .env</div>
            <div className="text-neutral-500"># Edit .env with your keys</div>
            <div className="text-neutral-500 mt-4 mb-3"># Run</div>
            <div className="text-emerald-400">
              node apps/server/dist/index.js
            </div>
            <div className="text-neutral-500 mt-4 mb-1">
              # Or use Docker
            </div>
            <div className="text-neutral-300">docker compose up</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Configuration Tiers
            </h3>
            <p className="text-sm text-neutral-500 mb-6">
              Start minimal and add capabilities as you need them. Every tier
              builds on the previous one.
            </p>

            <div className="space-y-3">
              {configTiers.map((tier, i) => (
                <div
                  key={tier.tier}
                  className="border border-neutral-200 rounded-lg p-4 bg-white"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                      Tier {i + 1}
                    </span>
                    <span className="text-sm font-semibold text-neutral-900">
                      {tier.tier}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400 mb-1">
                    {tier.requires}
                  </div>
                  <div className="text-sm text-neutral-600">{tier.unlocks}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
