import Image from "next/image";
import { P } from "../../components/ui/paragraph";
import Hero from "../../components/hero/Hero";
import Works from "../../components/works/Works";
import Build from "../../components/hero/Build";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Build />
      <Works />
      <div className="h-[300vh] w-full" />
    </main>
  );
}
