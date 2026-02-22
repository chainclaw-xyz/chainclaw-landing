import { useCases } from "@/lib/data";
import { Card } from "./ui/card";

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Built for Everyone
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            From first-time wallet users to DAO treasuries. ChainClaw scales
            with your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {useCases.map((uc) => (
            <Card key={uc.name}>
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">
                    {uc.name}
                  </h3>
                  <p className="text-sm text-neutral-400">{uc.role}</p>
                </div>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full border border-neutral-200 text-neutral-500">
                  {uc.tier}
                </span>
              </div>

              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                {uc.description}
              </p>

              <div className="bg-neutral-950 rounded-lg p-4 font-mono text-xs leading-relaxed text-neutral-400 overflow-x-auto whitespace-pre">
                {uc.terminal}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
