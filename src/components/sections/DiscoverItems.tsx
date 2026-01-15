"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import NFTCard from "../ui/NFTCard";
import { NFTItem } from "@/types/nftItem";

import nft1 from "../../assets/images/nft-art-12.jpeg";
import nft2 from "../../assets/images/nft-art-09.jpeg";
import nft3 from "../../assets/images/nft-art-10.jpeg";

const items: NFTItem[] = [
  { id: "1", title: "Forma Abstrata #01", image: nft1, price: 320, currency: "USD", likes: 124 },
  { id: "2", title: "Essência Digital #02", image: nft2, price: 250, currency: "USD", likes: 89 },
  { id: "3", title: "Fragmento Neural #03", image: nft3, price: 410, currency: "USD", likes: 201 },
];

export default function DiscoverItems() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-slate-900 min-h-screen flex flex-col items-center justify-center px-8 md:px-30 pt-4 pb-16 md:py-0 gap-6"
    >
      <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center">
        Descubra NFTs
      </motion.h2>

      <motion.p variants={fadeUp} className="md:max-w-2xl text-center">
        Uma curadoria de NFTs digitais em destaque, reunindo peças exclusivas selecionadas por qualidade visual, originalidade e identidade criativa.
      </motion.p>

      <motion.div className="w-full flex flex-col md:flex-row md:justify-evenly gap-4 pt-4">
        {items.map((item) => (
          <NFTCard key={item.id} {...item} />
        ))}
      </motion.div>
    </motion.section>
  );
}
