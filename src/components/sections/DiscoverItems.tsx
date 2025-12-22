"use client";

import NFTCard from "../ui/NFTCard";
import { NFTItem } from "@/types/nftItem";

import nft1 from "../../assets/images/nft-art-12.jpeg";
import nft2 from "../../assets/images/nft-art-09.jpeg";
import nft3 from "../../assets/images/nft-art-10.jpeg";

const items: NFTItem[] = [
  { id: "1", title: "Abstract Form #01", image: nft1, price: 320, currency: "USD", likes: 124 },
  { id: "2", title: "Digital Essence #02", image: nft2, price: 250, currency: "USD", likes: 89 },
  { id: "3", title: "Neural Fragment #03", image: nft3, price: 410, currency: "USD", likes: 201 },
];

export default function DiscoverItems() {
  return (
    <section className="bg-slate-900 min-h-screen flex flex-col items-center justify-center px-8 md:px-30 pt-4 pb-16 md:py-0 gap-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Descubra NFTs
      </h2>

      <p className="md:max-w-2xl text-center">
        Uma curadoria de NFTs digitais em destaque, reunindo peças exclusivas selecionadas por qualidade visual, originalidade e identidade criativa.
      </p>

      <div className="w-full h-full flex flex-col md:flex-row md:justify-evenly gap-4 md:gap-0">
        {items.map((item) => (
          <NFTCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
