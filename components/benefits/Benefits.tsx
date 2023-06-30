"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { H2 } from "../ui/h2";
import { H3 } from "../ui/h3";
import { P } from "../ui/paragraph";
import { H1 } from "../ui/h1";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { benefits } from "@/lib/utils/Faq";
import Accordion from "./Accordion";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

function Benefits({}: Props) {
  return (
    <>
      <GridAcc />
    </>
  );
}

export default Benefits;

function GridAcc() {
  return (
    <>
      <div className="">
        <section className="p-6 min-h-screen w-full max-w-6xl mx-auto">
          <H1 className="max-w-lg px-4 py-6">Exciting Benefits Await You</H1>

          <div className=" grid grid-cols-9 gap-4 w-full max-w-5xl">
            <div className="border p-4 border-slate-100/10 rounded-tl-md  h-[10rem] col-span-2 flex items-end">
              <H2 size={"sm"} className="max-w-[5ch] text-[#768ddd]">
                Profit Sharing
              </H2>

              {/* <P>
            Have a say in the decision-making process of VentureX DAO. Your vote
            matters, and together, we shape the future of our community.
          </P> */}
            </div>
            <div className="border border-slate-100/10  p-4 col-span-4 flex items-end justify-center">
              <H2 className="text-[#768ddd] text-sm text-center max-w-[10ch]">
                Governance Voting Power
              </H2>
            </div>
            <div className="border border-slate-100/10 rounded-r-md  p-4 col-span-3 row-span-2 flex items-end justify-end">
              <H2 className="text-right text-[#767ddd]">
                Special Discord Role & Channel
              </H2>
            </div>
            <div className="border border-slate-100/10 rounded-bl-md p-4 col-span-3 h-[10rem]">
              <H2 className="text-[#767ddd]">Monthly Giveaways</H2>
            </div>
            <div className="border border-slate-100/10  p-4 col-span-3 ">
              <H2 className="text-[#767ddd]">Shared Token Allocations</H2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function AccordionTwo() {
  const [active, setActive] = useState(0);

  const handleToggle = (index: number) => {
    setActive(index);
  };

  // gsap

  const main = useRef(null);
  const tl = useRef(null);

  const toggleTimeline = () => {
    // tl.current.reversed(!tl.current.reversed());
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const accordions = gsap.utils.toArray(".container") as HTMLElement[];

      accordions.forEach((el, idx) => {
        if (idx === active) {
          gsap.timeline().to(el, { flex: 2, duration: 2, ease: "expo" });
        }
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, [active]);

  return (
    <div className="max-w-4xl mx-auto min-h-screen flex items-center">
      <section ref={main} className="w-full flex gap-4">
        {benefits.map((item, index) => {
          return (
            <>
              <div
                onClick={() => handleToggle(index)}
                key={item.id}
                className={`border container rounded-3xl flex relative items-end transition-all duration-1000 ease-in-out justify-center border-slate-100/10 min-h-[60vh] p-4 shadow-black/40 shadow-lg hover:cursor-pointer ${
                  active === index ? "flex-[2]" : "flex-[0.5]"
                }  `}
              >
                <div className="relative z-10 se">
                  <H2
                    className={`mb-1 title transition-all duration-1000 ease ease-in-out 
     `}
                  >
                    {item.title}
                  </H2>
                  <P className=" detail">{item.details}</P>
                </div>
                <div className="absolute inset-0 z-0 shadow-black/40 shadow-lg "></div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
}
