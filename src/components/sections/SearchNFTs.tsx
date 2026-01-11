"use client";

import Image from "next/image";
import nft1 from "@/assets/images/nft-art-14.png";

export default function SearchNFTs() {
  return (
    <section className="bg-slate-900 h-auto md:h-[60vh] pt-16 flex justify-center items-start px-8 md:px-0 pb-20 md:pb-0">
      <div className="relative bg-gradient-to-r from-sky-500 via-blue-800 to-slate-950 h-auto md:h-[70%] w-full md:w-2/3 rounded-2xl shadow-xl flex flex-col-reverse md:flex-row overflow-visible">

        <div className="w-full md:w-1/3 relative flex justify-center md:block">
          <Image
            src={nft1}
            alt="NFT art"
            quality={100}
            priority
            className="relative md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 pl-0 md:pl-3 w-48 md:w-auto"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-center text-white px-6 md:px-12 py-8 md:py-0 gap-3 md:gap-1">
          <h3 className="text-2xl md:text-3xl font-bold leading-tight text-center md:text-left">
            Encontre sua inspiração
          </h3>

          <p className="text-slate-200 max-w-xl text-center md:text-left">
            Você pode buscar NFTs dos seus colecionadores favoritos ao redor do mundo aqui.
          </p>

          <div className="mt-4 flex w-full max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Buscar NFTs, artistas ou coleções"
              className="w-full rounded-l-lg bg-slate-900/80 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none"
            />

            <button
              type="button"
              className="rounded-r-lg bg-blue-600/80 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
