import Image from "next/image";
import { P } from "../../components/ui/paragraph";
import Hero from "../../components/hero/Hero";
import Works from "../../components/works/Works";
import Build from "../../components/hero/Build";
import BenefitSection from "../../components/faq/BenefitSection";
import FreqAQ from "../../components/faq/FreqAQ";
import ESwiper from "../../components/explore-list/ESwiper";
import Team from "../../components/team/Team";
import { TeamCard } from "../../components/ui/team-card";
import Benefits from "../../components/benefits/Benefits";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Works />
      <ESwiper />
      {/* <Build /> */}

      <Benefits />
      <Team />
      <FreqAQ />
      {/* <BenefitSection /> */}
      {/* <div className="h-[20vh] w-full bg-gradient-to-t from-transparent to-background fixed top-0 left-0 z-40"></div> */}
    </main>
  );
}
