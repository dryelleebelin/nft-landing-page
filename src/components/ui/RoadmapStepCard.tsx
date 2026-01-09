"use client";

import { LucideIcon } from "lucide-react";

interface RoadmapStepCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function RoadmapStepCard({ title, description, icon: Icon }: RoadmapStepCardProps) {
  return (
    <div className="group relative px-6 py-5 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">

      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-slate-950 opacity-20 blur-sm group-hover:opacity-30 transition" />

      <div className="relative flex flex-col items-center gap-1 text-center max-w-[160px]">
        <Icon className="w-6 h-6 text-sky-400" />
        <span className="text-sm font-semibold">{title}</span>
        <span className="text-xs text-slate-400">
          {description}
        </span>
      </div>

    </div>
  );
}
