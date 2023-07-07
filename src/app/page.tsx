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

export default function Home() {
  return (
    <main className="">
      {/* <Hero /> */}
      <ESwiper />
      {/* <Build /> */}
      {/* <Works /> */}
      {/* <div className="h-[100vh] w-full" /> */}

      {/* <FreqAQ /> */}
      {/* <BenefitSection /> */}
      <Team />
    </main>
  );
}
