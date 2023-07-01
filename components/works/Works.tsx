"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { H2 } from "../ui/h2";
import { P } from "../ui/paragraph";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { H1 } from "../ui/h1";

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
    <section className="w-full my-[10rem]">
      <div className="w-full flex items-center justify-center">
        <H1 className="text-center max-w-lg">Why Choose VentureX DAO?</H1>
      </div>

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
      gsap.to(".second", {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".first",
          // markers: true,
          start: `top 230vh`,
          end: `bottom 200vh`,
          scrub: true,
          pin: ".second",
          invalidateOnRefresh: true,
        },
      });
    }, main);

    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div ref={main} className="relative hidden lg:block  min-h-screen w-full ">
      <div
        style={{ zIndex: 15 }}
        className="first h-[60vh] z-50 max-w-4xl left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-1/2   w-full flex items-center  bg-background shadow-lg p-6 shadow-black/40 border border-slate-100/10 rounded-xl"
      >
        <div className="max max-w-lg">
          <H2 className="text-3xl fo font-heading-two mb-4 ">
            Community-Centric Approach
          </H2>
          <P>
            At VentureX DAO, community is at the heart of everything we do. We
            foster an inclusive environment that encourages active
            participation, idea sharing, and collaboration among our diverse
            community members. Participate in our staking program and earn
            rewards in the form of VentureX tokens, which can be used for
            investments or traded on supported exchanges.
          </P>
        </div>
      </div>
      <div
        style={{ zIndex: 10 }}
        className="second scale-[90%] h-[60vh] z-50 max-w-4xl left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-1/2   w-full flex items-center  bg-background shadow-lg p-6 shadow-black/40 border border-slate-100/10 rounded-xl"
      >
        <div className="max max-w-lg">
          <H2 className="text-3xl fo font-heading-two mb-4 ">
            Lifetime DAO Benefits
          </H2>
          <P>
            Our Early Supporter NFT offers unique lifetime DAO benefits that
            provide exclusive privileges and opportunities for early adopters.
            Join us now to unlock a world of rewards and recognition.
          </P>
        </div>
      </div>
      <div
        style={{ zIndex: 5 }}
        className="third scale-[90%] h-[60vh] z-50 max-w-4xl left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-1/2   w-full flex items-center  bg-background shadow-lg p-6 shadow-black/40 border border-slate-100/10 rounded-xl"
      >
        <div className="max max-w-lg">
          <H2 className="text-3xl fo font-heading-two mb-4 ">Third Card</H2>
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
    <div className="space-y-3 p-4 w-full flex flex-col items-center justify-center lg:hidden">
      <div className="h-[60vh] max-w-4xl  w-full flex items-center  bg-background shadow-lg p-6 shadow-black/40 border border-slate-100/10 rounded-xl">
        <div className="max max-w-lg">
          <H2 className="text-3xl font-heading-two mb-4 ">
            Community-Centric Approach
          </H2>
          <P>
            At VentureX DAO, community is at the heart of everything we do. We
            foster an inclusive environment that encourages active
            participation, idea sharing, and collaboration among our diverse
            community members
          </P>
        </div>
      </div>
      <div className="h-[60vh] max-w-4xl   w-full flex items-center  bg-background shadow-lg p-6 shadow-black/40 border border-slate-100/10 rounded-xl">
        <div className="max max-w-lg">
          <H2 className="text-3xl fo font-heading-two mb-4 ">
            Lifetime DAO Benefits
          </H2>
          <P>
            Our Early Supporter NFT offers unique lifetime DAO benefits that
            provide exclusive privileges and opportunities for early adopters.
            Join us now to unlock a world of rewards and recognition.
          </P>
        </div>
      </div>
      <div className="h-[60vh] max-w-4xl   w-full flex items-center  bg-background shadow-lg p-6 shadow-black/40 border border-slate-100/10 rounded-xl">
        <div className="max max-w-lg">
          <H2 className="text-3xl fo font-heading-two mb-4 ">
            Innovative Solutions
          </H2>
          <P>
            VentureX DAO is committed to pushing the boundaries of decentralized
            innovation. By harnessing the collective intelligence of our
            community, we develop cutting-edge solutions and drive forward the
            adoption of blockchain technology.
          </P>
        </div>
      </div>
    </div>
  );
}
