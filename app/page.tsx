import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AccordionLinks from "./components/AccordionLinks";
import HousePlans from "./components/HousePlans";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AccordionLinks />
      <HousePlans />
    </main>
  );
}
