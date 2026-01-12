"use client";

import RoadmapStepCard from "../ui/RoadmapStepCard";
import { LuSparkles, LuLayers, LuFileText, LuNetwork, LuRocket } from "react-icons/lu";

export default function Roadmap() {
  const steps = [
    {
      title: "Criação do NFT",
      desc: "Desenvolvimento e definição do ativo digital.",
      icon: LuSparkles,
    },
    {
      title: "Metadados & Assets",
      desc: "Estruturação de dados, imagens e propriedades.",
      icon: LuLayers,
    },
    {
      title: "Contratos Inteligentes",
      desc: "Automação e regras de funcionamento do NFT.",
      icon: LuFileText,
    },
    {
      title: "Infraestrutura Blockchain",
      desc: "Gestão de rede, tokens e integrações.",
      icon: LuNetwork,
    },
    {
      title: "Lançamento Programado",
      desc: "Publicação e disponibilidade no marketplace.",
      icon: LuRocket,
    },
  ];

  return (
    <section className="bg-slate-900 flex flex-col items-center justify-center px-8 md:px-30 pt-14 pb-24 gap-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Roadmap do Ecossistema
      </h2>

      <p className="md:max-w-2xl text-center mb-4">
        Uma visão estratégica das etapas que estruturam o ecossistema, da concepção dos NFTs à integração com contratos inteligentes e seu lançamento no marketplace.
      </p>

      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {steps.map(({ title, desc, icon }, index) => (
            <div key={title} className="flex items-center gap-6">

              <RoadmapStepCard
                title={title}
                description={desc}
                icon={icon}
              />

              {index < steps.length - 1 && (
                <div className="hidden md:block w-14 h-px bg-gradient-to-r from-sky-500 to-indigo-600" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}