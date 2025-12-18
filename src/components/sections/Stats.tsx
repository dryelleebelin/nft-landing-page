"use client";

import type { StatItem } from "@/types/stats";

export default function Stats() {
  const stats: StatItem[] = [
    { number: "5.5M", label: "Usuários Ativos" },
    { number: "3.5M", label: "Nossas Artes" },
    { number: "512", label: "Artistas Ativos" },
    { number: "854", label: "Nossos Produtos" },
    { number: "10M", label: "Total de NFTs" }
  ]

  return (
    <section className="bg-gradient-to-r from-blue-800 to-slate-950 py-10 px-6 md:px-16 lg:px-40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {stats.map(({ number, label }, index) => (
          <div key={label} className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
            
            <div className="flex flex-col px-6 text-center md:text-start">
              <h3 className="text-xl md:text-2xl font-bold">
                {number}
                <span className="text-sky-400 pl-1">+</span>
              </h3>
              <p className="text-sm text-slate-300 ">
                {label}
              </p>
            </div>

            {index < stats.length - 1 && (
              <div className="mx-4 md:mx-6 w-16 h-[2px] md:w-[2px] md:h-14 bg-gradient-to-r md:bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600 md:rotate-20"/>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
