import { Header } from "@/src/components/ui/Header";
import { Hero } from "@/src/components/Hero";
import { About } from "@/src/components/About";
import { Journey } from "@/src/components/Journey";
import { Contact } from "@/src/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510] text-[#e6e6e6]">
      <Header />
      <Hero />
      <About />
      <Journey />
      <Contact />
    </main>
  );
}
