import { stats, chains } from "@/lib/data";

export function Architecture() {
  return (
    <section className="py-24 px-6 bg-neutral-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            11 Packages, One Pipeline
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Clean monorepo architecture. Every package builds independently,
            tested in isolation and integration.
          </p>
        </div>

        <div className="bg-neutral-950 rounded-xl p-6 sm:p-8 font-mono text-sm overflow-x-auto mb-10">
          <div className="text-neutral-500 mb-4">
            # Package dependency graph
          </div>
          <div className="text-neutral-300 space-y-1">
            <div>
              <span className="text-neutral-500">core</span>{" "}
              <span className="text-neutral-600">&rarr;</span>{" "}
              <span className="text-neutral-500">chains</span>{" "}
              <span className="text-neutral-600">&rarr;</span>{" "}
              <span className="text-neutral-500">wallet</span>{" "}
              <span className="text-neutral-600">&rarr;</span>{" "}
              <span className="text-emerald-400">pipeline</span>{" "}
              <span className="text-neutral-600">&rarr;</span>{" "}
              <span className="text-neutral-500">skills</span>{" "}
              <span className="text-neutral-600">&rarr;</span>{" "}
              <span className="text-neutral-500">agent</span>{" "}
              <span className="text-neutral-600">&rarr;</span>{" "}
              <span className="text-neutral-500">gateway</span>{" "}
              <span className="text-neutral-600">&rarr;</span>{" "}
              <span className="text-neutral-300">server</span>
            </div>
          </div>
          <div className="text-neutral-600 mt-4 text-xs">
            executor &rarr; simulator &rarr; risk engine &rarr; guardrails
            &rarr; nonce manager &rarr; signer &rarr; broadcast &rarr;
            confirm
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatCard value={stats.safetyChecks} label="Safety checks per tx" />
          <StatCard value={stats.packages} label="Packages" />
          <StatCard value={stats.skills} label="Built-in skills" />
          <StatCard value={chains.length} label="Chains supported" />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {chains.map((chain) => (
            <span
              key={chain.id}
              className="px-3 py-1 text-xs font-mono border border-neutral-200 rounded-full text-neutral-600"
            >
              {chain.name}{" "}
              <span className="text-neutral-400">({chain.id})</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="border border-neutral-200 rounded-xl p-5 bg-white">
      <div className="text-3xl font-bold tracking-tight text-neutral-900">
        {value}
      </div>
      <div className="mt-1 text-sm text-neutral-500">{label}</div>
    </div>
  );
}
