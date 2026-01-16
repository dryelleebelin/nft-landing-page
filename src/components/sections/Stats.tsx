"use client";

import AnimatedStatNumber from "../ui/AnimatedStatNumber";
import type { StatItem } from "@/types/stats";

export default function Stats() {
  const stats: StatItem[] = [
    { value: 350, suffix: "K", label: "Usuários Ativos" },
    { value: 120, suffix: "K", label: "Artes Criadas" },
    { value: 1.2, suffix: "K", label: "Artistas Ativos" },
    { value: 850, label: "Coleções" },
    { value: 1.5, suffix: "M", label: "NFTs Mintados" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-800 to-slate-950 py-10 md:px-16 lg:px-40 border-y border-white/10 overflow-hidden">

      <div className="md:hidden overflow-hidden">
        <div className="animate-scroll gap-10">
          {[...stats, ...stats].map((stat, index) => (
            <div
              key={index}
              className="min-w-[110px] flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-bold">
                <AnimatedStatNumber value={stat.value} suffix={stat.suffix} />
                <span className="text-sky-400 pl-1">+</span>
              </h3>
              <p className="text-xs text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center justify-between gap-0">
        {stats.map(({ value, suffix, label }, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col px-6 text-start">
              <h3 className="text-2xl font-bold">
                <AnimatedStatNumber value={value} suffix={suffix} />
                <span className="text-sky-400 pl-1">+</span>
              </h3>
              <p className="text-sm text-slate-300">{label}</p>
            </div>

            {index < stats.length - 1 && (
              <div className="mx-6 w-[2px] h-14 bg-gradient-to-b from-blue-700 to-blue-500 rotate-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}