"use client";

import { H2 } from "../ui/h2";
import { P } from "../ui/paragraph";
import { H1 } from "../ui/h1";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { benefits } from "@/lib/utils/Faq";
import { Separator } from "../ui/separator";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

function Benefits({}: Props) {
  return (
    <>
      <section className="w-full p-4 min-h-screen md:p-6 my-[10vh] md:mb-[20vh] md:mt-0 ">
        <div className="lg:flex w-full lg:items-end lg:justify-between  mx-auto py-8 mb-8 ">
          <div className=" max-w-lg">
            <div className="flex items-center space-x-4 py-2">
              <Separator className="w-[3rem]" />
              <P className="font-medium uppercase text-border">
                Benefits For You
              </P>
            </div>
            <H1>Exciting Benefits Await You</H1>
          </div>
          <P className="max-w-md hidden lg:block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
            nisi! Lorem ipsum dolor sit amet
          </P>
        </div>

        {/* <H1 className="mb-6 max-w-lg">Exciting Benefits Await You</H1> */}
        <div className="h-px w-full bg-slate-100/5" />
        <div className="">
          {benefits.map((benefit) => (
            <div className="py-10 border-b border-slate-100/5" key={benefit.id}>
              <H1 className="mb-4">{benefit.title}</H1>
              <P className="max-w-3xl">{benefit.details}</P>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Benefits;
