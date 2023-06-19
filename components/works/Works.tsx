"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { H2 } from "../ui/h2";
import { P } from "../ui/paragraph";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
type Props = {};

function Works({}: Props) {
  const topPossition = 5;

  const cardArray = [
    { id: "w", name: "card one" },
    { id: "we", name: "card two" },
    { id: "wea", name: "card three" },
  ];

  return (
    <section className="w-full">
      <SmallScreen />
      <BigScreen />
    </section>
  );
}

export default Works;

function BigScreen() {
  const main = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".card-last", {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".first",
          // markers: true,
          start: `top 30%`,
          end: `bottom 20%`,
          scrub: true,
          pin: ".card-last",
          invalidateOnRefresh: true,
        },
      });
    }, main);

    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div
      ref={main}
      className="relative hidden lg:block  min-h-screen w-full my-[10rem]"
    >
      <div
        style={{ zIndex: 15 }}
        className="first h-[60vh] z-50 max-w-4xl left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-1/2   w-full flex items-center  bg-background shadow-lg p-6 shadow-black/40 border border-slate-100/10 rounded-xl"
      >
        <div className="max max-w-lg">
          <H2 className="text-3xl fo font-heading-two mb-4 ">
            Staking and Rewards
          </H2>
          <P>
            Participate in our staking program and earn rewards in the form of
            VentureX tokens, which can be used for investments or traded on
            supported exchanges.
          </P>
        </div>
      </div>
      <div
        style={{ zIndex: 10 }}
        className="card-last scale-[90%] h-[60vh] z-50 max-w-4xl left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-1/2   w-full flex items-center  bg-background shadow-lg p-6 shadow-black/40 border border-slate-100/10 rounded-xl"
      >
        <div className="max max-w-lg">
          <H2 className="text-3xl fo font-heading-two mb-4 ">Token Sales</H2>
          <P>
            Get access to exclusive token sales of handpicked projects vetted by
            our expert team, offering early-stage investment opportunities with
            high growth potential.
          </P>
        </div>
      </div>
    </div>
  );
}

function SmallScreen() {
  return (
    <div className="my-[10rem] space-y-3 p-4 w-full flex flex-col items-center justify-center lg:hidden">
      <div className="h-[60vh] max-w-4xl  w-full flex items-center  bg-background shadow-lg p-6 shadow-black/40 border border-slate-100/10 rounded-xl">
        <div className="max max-w-lg">
          <H2 className="text-3xl fo font-heading-two mb-4 ">
            Staking and Rewards
          </H2>
          <P>
            Participate in our staking program and earn rewards in the form of
            VentureX tokens, which can be used for investments or traded on
            supported exchanges.
          </P>
        </div>
      </div>
      <div className="h-[60vh] max-w-4xl   w-full flex items-center  bg-background shadow-lg p-6 shadow-black/40 border border-slate-100/10 rounded-xl">
        <div className="max max-w-lg">
          <H2 className="text-3xl fo font-heading-two mb-4 ">Token Sales</H2>
          <P>
            Get access to exclusive token sales of handpicked projects vetted by
            our expert team, offering early-stage investment opportunities with
            high growth potential.
          </P>
        </div>
      </div>
    </div>
  );
}
