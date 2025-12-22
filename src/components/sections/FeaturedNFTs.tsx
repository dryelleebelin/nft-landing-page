"use client";

import Image from "next/image";
import img1 from "../../assets/images/nft-art-01.jpeg";
import img2 from "../../assets/images/nft-art-02.jpeg";
import img3 from "../../assets/images/nft-art-03.jpeg";
import img4 from "../../assets/images/nft-art-13.jpeg";
import img5 from "../../assets/images/nft-art-08.jpeg";
import img6 from "../../assets/images/nft-art-05.jpeg";

export default function FeaturedNFTs() {
  return (
    <section className="bg-slate-900 min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-6 md:pl-30 md:pr-20 pt-14 md:pt-10 gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Explore Nossas Principais Artes NFT
        </h2>

        <p className="w-full md:w-[80%] text-center md:text-left">
          Descubra NFTs selecionados com curadoria artística, destacando coleções únicas, raras e de alto valor criativo dentro do ecossistema.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 md:gap-10">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm font-semibold">Coleções em Destaque</p>
            <h3 className="text-3xl font-bold">320+</h3>
            <p>
              Coleções selecionadas com curadoria artística e alto valor criativo.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm font-semibold">NFTs Curados</p>
            <h3 className="text-3xl font-bold">12.5K</h3>
            <p>
              NFTs exclusivos escolhidos por qualidade, originalidade e raridade.
            </p>
          </div>
        </div>
      </div>

      <div className=" h-full w-full md:hidden px-6 pb-16 pt-10">
        <div className="grid grid-cols-2 gap-4">
          {[img1, img2, img3, img4, img5, img6].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`NFT art ${i + 1}`}
              className="rounded-lg shadow-md border border-white/20"
            />
          ))}
        </div>
      </div>

      <div className="hidden md:flex w-1/2 items-center pt-22 pr-20">
        <div className="relative w-full h-[520px]">
          <Image
            src={img1}
            alt="NFT art 1"
            className="absolute top-16 left-28 w-64 z-20 rounded-md shadow-xl border border-white/50"
          />

          <Image
            src={img2}
            alt="NFT art 2"
            className="absolute top-0 right-20 w-44 z-10 rounded-md shadow-lg border border-white/30"
          />

          <Image
            src={img3}
            alt="NFT art 3"
            className="absolute top-40 right-6 w-48 z-20 rounded-md shadow-lg border border-white/40"
          />

          <Image
            src={img4}
            alt="NFT art 4"
            className="absolute bottom-18 left-10 w-36 z-10 rounded-lg shadow-md border border-white/30"
          />

          <Image
            src={img5}
            alt="NFT art 5"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 z-20 rounded-lg shadow-md border border-white/20"
          />

          <Image
            src={img6}
            alt="NFT art 6"
            className="absolute top-32 left-6 w-32 z-0 opacity-80 rounded-lg border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
