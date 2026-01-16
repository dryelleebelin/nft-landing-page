"use client";

import { RoadmapStep } from "@/types/roadmapStep";

export default function RoadmapStepCard({ title, description, icon: Icon }: RoadmapStep) {
  return (
    <div className="group relative px-6 py-5 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 opacity-20 blur-md group-hover:opacity-30 transition" />

      <div className="relative flex flex-col items-center gap-2 text-center max-w-[160px]">
        <Icon className="w-6 h-6 text-blue-500" />
        <span className="text-sm font-semibold text-white">{title}</span>
        <span className="text-xs text-slate-400">
          {description}
        </span>
      </div>

    </div>
  );
}