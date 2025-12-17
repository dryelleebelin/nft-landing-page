"use client";

import Image from "next/image";
import logo from "../../../public/favicon.png";

export default function Header() {
  const sections = [
    { id: "home", label: "Início" },
    { id: "featured", label: "Destaques" },
    { id: "discover", label: "Explorar" },
    { id: "roadmap", label: "Roadmap" }
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="backdrop-blur-md border-b border-white/10 sticky top-0 h-auto py-6 md:py-6 px-6 md:px-40 flex justify-between items-center">
      <Image src={logo} className="w-20 object-contain" alt="Logo do site" />

      <nav className="hidden md:flex gap-8">
        {sections.map(({ id, label }) => {
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="cursor-pointer transition-colors duration-300 hover:text-cyan-500"
            >
              {label}
            </button>
          )
        })}
      </nav>

      <button
        type="button"
        onClick={() => { }}
        className="bg-gradient-to-r from-cyan-500 via-blue-800 to-slate-950 rounded-full py-2 px-4 text-sm font-semibold flex items-center justify-center hover:text-slate-100 hover:bg-blue-600 hover:from-cyan-400 hover:via-blue-700 hover:to-slate-950 transition-colors duration-300 shadow-md cursor-pointer hover:scale-102 active:scale-95"
      >
        Conectar Carteira
      </button>
    </header>
  )
}