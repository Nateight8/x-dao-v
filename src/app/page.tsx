import Image from "next/image";
import { P } from "../../components/ui/paragraph";
import Hero from "../../components/hero/Hero";
import Works from "../../components/works/Works";
import Build from "../../components/hero/Build";
import Faq from "../../components/faq/Faq";
import Benefits from "../../components/benefits/Benefits";
import Accordion from "../../components/benefits/Accordion";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Build />
      <Works />
      <div className="h-[100vh] w-full" />
      {/* <Benefits /> */}

      <Faq />
    </main>
  );
}
