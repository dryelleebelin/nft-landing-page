"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import RoadmapStepCard from "../ui/RoadmapStepCard";
import { LuSparkles, LuLayers, LuFileText, LuNetwork, LuRocket } from "react-icons/lu";

export default function Roadmap() {
  const steps = [
    {
      title: "Criação do NFT",
      desc: "Desenvolvimento e definição do ativo digital",
      icon: LuSparkles,
    },
    {
      title: "Metadados & Assets",
      desc: "Estruturação de dados, imagens e propriedades",
      icon: LuLayers,
    },
    {
      title: "Contratos Inteligentes",
      desc: "Automação e regras de funcionamento do NFT",
      icon: LuFileText,
    },
    {
      title: "Infraestrutura Blockchain",
      desc: "Gestão de rede, tokens e integrações",
      icon: LuNetwork,
    },
    {
      title: "Lançamento Programado",
      desc: "Publicação e disponibilidade no marketplace",
      icon: LuRocket,
    },
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-slate-900 flex flex-col items-center justify-center px-8 md:px-30 md:pt-14 md:pb-24 gap-6"
    >
      <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center">
        Roadmap do Ecossistema
      </motion.h2>

      <motion.p variants={fadeUp} className="md:max-w-2xl text-center mb-4">
        Uma visão estratégica das etapas que estruturam o ecossistema, da concepção dos NFTs à integração com contratos inteligentes e seu lançamento no marketplace.
      </motion.p>

      <div className="w-full">
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {steps.map(({ title, desc, icon }, index) => (
            <motion.div variants={fadeUp} key={title} className="flex items-center gap-6">

              <RoadmapStepCard
                title={title}
                description={desc}
                icon={icon}
              />

              {index < steps.length - 1 && (
                <div className="hidden md:block w-14 h-px bg-gradient-to-r from-blue-700 to-blue-500" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}