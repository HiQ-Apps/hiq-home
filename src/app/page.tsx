import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Ideas } from "@/components/ideas";
import { LocalTime } from "@/components/local-time";
import { Services } from "@/components/services";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <LocalTime />
      <About />
      <Work />
      <Ideas />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
