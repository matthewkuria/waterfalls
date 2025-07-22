import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AccordionLinks from "./components/AccordionLinks";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AccordionLinks />
    </main>
  );
}
