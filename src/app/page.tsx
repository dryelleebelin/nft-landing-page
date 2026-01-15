import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedNFTs from "@/components/sections/FeaturedNFTs";
import DiscoverItems from "@/components/sections/DiscoverItems";
import Roadmap from "@/components/sections/Roadmap";
import SearchNFTs from "@/components/sections/SearchNFTs";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="h-screen font-inter bg-slate-900 text-slate-300">
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="featured">
        <FeaturedNFTs />
      </section>

      <section id="discover" className="scroll-mt-5">
        <DiscoverItems />
      </section>

      <section id="roadmap" className="scroll-mt-26">
        <Roadmap />
      </section>

      <section id="search">
        <SearchNFTs />
      </section>

      <Footer />
    </main>
  );
}
