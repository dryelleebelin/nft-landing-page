"use client";

import Image from "next/image";
import sonic from "../../assets/images/sonic.png";
import blobOutline from "../../assets/images/blob-outline.svg";
import blobSolid from "../../assets/images/blob-solid.svg";

export default function Hero() {
  return (
    <section className="bg-slate-900 flex flex-col-reverse md:flex-row items-center min-h-screen pt-34 pb-12 md:pb-8 gap-4 md:gap-0 relative overflow-hidden">

      {/* --- BACKGROUND EFFECTS --- */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 hidden md:block h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 -translate-x-1/2 h-[300px] w-[400px] rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

        <Image
          src={blobOutline}
          alt="Blob outline"
          className="pointer-events-none absolute top-26 left-4 hidden md:block w-80 opacity-60"
        />

        <Image
          src={blobSolid}
          alt="Blob solid"
          className="pointer-events-none absolute -top-40 right-40 hidden md:block w-64 opacity-50"
        />

        <Image
          src={blobSolid}
          alt="Blob solid"
          className="pointer-events-none absolute bottom-6 right-16 hidden md:block w-34 opacity-40"
        />
      </div>

      <div className="w-full md:w-2/5 flex justify-center md:justify-end items-end md:items-center z-10">
        <Image
          src={sonic}
          alt="Imagem do Sonic"
          quality={100}
          priority
          className="w-full max-w-8/10 md:max-w-md object-contain"
        />
      </div>

      <div className="w-full md:w-3/5 px-6 md:pr-30 flex flex-col text-center md:text-end justify-center gap-4 z-10">
        <h2 className="text-2xl md:text-5xl text-sky-500 font-semibold">
          Crie Seus Próprios NFTs.
        </h2>

        <h1 className="text-3xl md:text-6xl font-bold">
          Crie e publique seus próprios NFTs.
        </h1>

        <p className="md:pl-20">
          Uma plataforma digital dedicada à criação, descoberta e negociação de NFTs, oferecendo uma experiência moderna, intuitiva e segura para criadores e colecionadores. Explore coleções digitais, ativos exclusivos e novas possibilidades dentro do ecossistema Web3.
        </p>

        <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4 mt-6 items-center">
          <button
            type="button"
            className="w-auto bg-gradient-to-r from-sky-500 via-blue-800 to-slate-950 rounded-full py-2 px-6 font-semibold flex items-center justify-center hover:text-slate-100 hover:from-sky-400 hover:via-blue-700 transition-colors transition-transform duration-300 hover:scale-103 active:scale-95 shadow-md cursor-pointer"
          >
            Começar Agora
          </button>

          <button
            type="button"
            className="w-auto relative inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-r from-sky-500 via-blue-800 to-slate-950 transition-transform duration-300 hover:scale-103 active:scale-95 cursor-pointer"
          >
            <span className="rounded-full bg-slate-950 px-6 py-2 font-semibold hover:text-slate-100 duration-300">
              Saiba Mais
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}