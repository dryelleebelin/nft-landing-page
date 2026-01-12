"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/icons/logo.png";
import type { SectionItem } from "@/types/sections";

export default function Header() {
  const sections: SectionItem[] = [
    { id: "home", label: "Início" },
    { id: "featured", label: "NFTs em Destaques" },
    { id: "discover", label: "Coleção" },
    { id: "roadmap", label: "Roadmap" }
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 py-6 px-6 md:px-30 flex justify-between items-center"
    >
      <a
        href="#home"
        aria-label="Voltar para o início"
      >
        <Image
          src={logo}
          alt="Logo do site"
          className="w-16 object-contain"
        />
      </a>

      <nav className="hidden md:flex gap-8">
        {sections.map(({ id, label }) => {
          return (
            <a
              key={id}
              onClick={() => scrollToSection(id)}
              className="transition-colors duration-300 hover:text-sky-500 cursor-pointer"
            >
              {label}
            </a>
          )
        })}
      </nav>

      <button
        type="button"
        onClick={() => { }}
        className="bg-gradient-to-r from-sky-500 via-blue-800 to-slate-950 rounded-full py-2 px-4 text-sm font-semibold flex items-center justify-center hover:text-slate-100 hover:bg-blue-600 hover:from-sky-400 hover:via-blue-700 hover:to-slate-950 transition-colors transition-transform duration-300 hover:scale-103 active:scale-95 shadow-md cursor-pointer"
      >
        Conectar Carteira
      </button>
    </motion.header>
  )
}