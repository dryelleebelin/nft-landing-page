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
    <section className="bg-gradient-to-r from-blue-800 to-slate-950 py-10 px-6 md:px-16 lg:px-40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {stats.map(({ value, suffix, label }, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-4 md:gap-0">

            <div className="flex flex-col px-6 text-center md:text-start">
              <h3 className="text-xl md:text-2xl font-bold">
                <AnimatedStatNumber value={value} suffix={suffix} />
                <span className="text-sky-400 pl-1">+</span>
              </h3>
              <p className="text-sm text-slate-300 ">
                {label}
              </p>
            </div>

            {index < stats.length - 1 && (
              <div className="mx-4 md:mx-6 w-16 h-[2px] md:w-[2px] md:h-14 bg-gradient-to-r md:bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600 md:rotate-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
