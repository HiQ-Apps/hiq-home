import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Work />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
