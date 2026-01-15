"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuArrowRight, LuHeart } from "react-icons/lu";
import { NFTItem } from "@/types/nftItem";

export default function NFTCard({ title, image, price, currency, likes }: NFTItem) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      className="md:w-1/4 rounded-lg bg-slate-800/40 p-4 flex flex-col gap-3 border border-blue-500/50 shadow-xl"
    >
      <Image
        src={image}
        alt={title}
        className="rounded-md object-cover"
      />

      <div className="flex justify-between">
        <h4 className="font-bold">{title}</h4>
        <div className="flex items-center gap-1 text-slate-400 text-sm">
          <LuHeart size={14} /> {likes}
        </div>
      </div>

      <div className="flex justify-between text-sm text-slate-400">
        <span>Preço base</span>
        <span className="text-white font-semibold">
          {price} {currency}
        </span>
      </div>

      <button className="mt-auto flex items-center justify-end gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition cursor-pointer">
        Explorar NFT <LuArrowRight size={16} />
      </button>
    </motion.article>
  );
}
