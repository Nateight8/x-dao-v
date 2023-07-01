"use client";

import { H2 } from "../ui/h2";
import { P } from "../ui/paragraph";
import { H1 } from "../ui/h1";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { benefits } from "@/lib/utils/Faq";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

function Benefits({}: Props) {
  return (
    <>
      <div className="p-4 min-h-screen w-full mx-auto max-w-5xl ">
        <section className="w-full">
          <H1 className="mb-16">Exciting Benefits Await You</H1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full ">
            {benefits.map((ben) => (
              <div
                key={ben.id}
                className="border hover:cursor shadow-md lg:shadow-xl shadow-black/40 border-slate-100/10 flex items-end p-4 rounded-xl min-h-[15rem]"
              >
                <div className="space-y-2 max-w-md">
                  <H2 className=" select-none" size={"sm"}>
                    {ben.title}
                  </H2>
                  <P className="text-sm select-none">{ben.details}</P>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Benefits;
