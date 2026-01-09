import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedNFTs from "@/components/sections/FeaturedNFTs";
import DiscoverItems from "@/components/sections/DiscoverItems";
import Roadmap from "@/components/sections/Roadmap";

export default function Home() {
  return (
    <main className="h-screen font-inter bg-slate-900 text-slate-300">
      <Header />
      <Hero />
      <Stats />
      <FeaturedNFTs />
      <DiscoverItems />
      <Roadmap />
    </main> 
  );
}
