import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedNFTs from "@/components/sections/FeaturedNFTs";

export default function Home() {
  return (
    <main className="h-screen font-inter bg-slate-900 text-slate-300">
      <Header />
      <Hero />
      <Stats />
      <FeaturedNFTs />
    </main>
  );
}
