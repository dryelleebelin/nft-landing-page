"use client";

import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { NFTItem } from "@/types/nftItem";

export default function NFTCard({ id, title, image, price, currency, likes }: NFTItem) {
  return (
    <article className="md:w-1/4 rounded-lg bg-slate-900 p-4 flex flex-col gap-3 border border-blue-500/50 shadow-xl">
      <Image
        src={image}
        alt={title}
        className="rounded-md object-cover"
      />

      <div className="flex justify-between">
        <h4 className="font-bold">{title}</h4>
        <div className="flex items-center gap-1 text-slate-400 text-sm">
          <Heart size={14} /> {likes}
        </div>
      </div>

      <div className="flex justify-between text-sm text-slate-400">
        <span>Floor</span>
        <span className="text-white font-semibold">{price} {currency}</span>
      </div>

      <button className="mt-auto flex items-center justify-end gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition cursor-pointer">
        Ver NFT <ArrowRight size={16} />
      </button>
    </article>
  );
}
