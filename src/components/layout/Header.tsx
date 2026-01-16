"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { LuChevronRight } from "react-icons/lu";
import logo from "@/assets/icons/logo.png";
import type { SectionItem } from "@/types/sections";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const sections: SectionItem[] = [
    { id: "home", label: "Início" },
    { id: "featured", label: "NFTs em Destaques" },
    { id: "discover", label: "Coleção" },
    { id: "roadmap", label: "Roadmap" }
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
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
        {sections.map(({ id, label }) => (
          <a
            key={id}
            onClick={() => scrollToSection(id)}
            className="transition-all duration-300 hover:text-white cursor-pointer"
          >
            {label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="hidden md:flex bg-gradient-to-l from-blue-700 to-blue-500 rounded-full py-2 px-4 text-sm font-semibold items-center justify-center hover:brightness-110 transition-all duration-300 shadow-md cursor-pointer"
      >
        Conectar Wallet
      </button>

      <button
        type="button"
        aria-label="Abrir menu"
        onClick={() => setIsOpen(true)}
        className="md:hidden text-2xl"
      >
        <FiMenu />
      </button>

      {isOpen && (
        <div
          className={`fixed inset-0 w-full h-screen bg-slate-900 md:hidden transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="py-6 px-6 md:px-30 flex justify-between items-center border-b border-white/10">
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
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white"
            >
              <FiX />
            </button>
          </div>

          <nav className="flex flex-col divide-y divide-white/10">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setIsOpen(false);
                }}
                className="flex items-center justify-between px-6 py-5 text-left text-base font-medium hover:bg-slate-800 transition"
              >
                <span>{label}</span>
                <LuChevronRight className="w-5 h-5 text-slate-400" />
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-white/10">
            <button
              type="button"
              className="w-full bg-gradient-to-l from-blue-700 to-blue-500 rounded-full py-3 text-sm font-semibold flex items-center justify-center hover:brightness-110 transition-all duration-300 shadow-md"
            >
              Conectar Wallet
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
}