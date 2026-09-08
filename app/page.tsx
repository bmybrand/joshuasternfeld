import { AboutFilmmaker } from "@/components/home/AboutFilmmaker";
import { ContactSection } from "@/components/home/ContactSection";
import { HomeHero } from "@/components/home/HomeHero";
import { WorkGrid } from "@/components/home/WorkGrid";

export default function Home() {
  return (
    <main className="bg-black">
      <HomeHero />
      <WorkGrid />
      <AboutFilmmaker />
      <ContactSection />
    </main>
  );
}
