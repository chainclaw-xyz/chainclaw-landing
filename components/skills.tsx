"use client";

import { useState } from "react";
import { skills, skillCategories, type SkillCategory } from "@/lib/data";
import { Card } from "./ui/card";
import { SkillIcon } from "./ui/icons";

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("all");

  const filtered =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-24 px-6 bg-neutral-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            23 Skills, One Agent
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            From simple balance checks to multi-step DeFi workflows. Every skill
            goes through the safety pipeline.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                active === cat.key
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill) => (
            <Card key={skill.name} className="bg-white">
              <div className="flex items-start gap-3">
                <SkillIcon icon={skill.icon} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {skill.title}
                    </h3>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500">
                      {skill.name}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
                    {skill.description}
                  </p>
                  {skill.requires && (
                    <div className="mt-3 text-xs text-neutral-400">
                      Requires: {skill.requires}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
