import { features } from "@/lib/data";
import { Card } from "./ui/card";
import { FeatureIcon } from "./ui/icons";

export function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Built for Safety
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Every transaction goes through simulation, risk analysis, and
            guardrails before broadcast. No exceptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <Card key={feature.title}>
              <FeatureIcon icon={feature.icon} />
              <h3 className="mt-4 text-base font-semibold text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
