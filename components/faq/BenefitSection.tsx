"use client";
import React, { useLayoutEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { P } from "../ui/paragraph";
import { H2 } from "../ui/h2";
import { H1 } from "../ui/h1";
import { Button } from "../ui/button";
import { faq } from "@/lib/utils/Faq";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Benefits from "../benefits/Benefits";

gsap.registerPlugin(ScrollTrigger);

function BenefitSection() {
  const main = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".faq", {
        opacity: 0.3,
        scale: 0.8,
        scrollTrigger: {
          pin: ".faq",
          // markers: true,
          start: "top 95vh",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }, main);

    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <>
      {/* <div ref={main} className="relative min-h-[200vh] p-4 hidden lg:block">
        <div className=" w-full  absolute top-0 faq">
          <Benefits />
        </div>
        <Mint />
      </div> */}
      <div className="relative min-h-[300vh] p-4 lg:hidden ">
        <Mint />
      </div>
    </>
  );
}

export default BenefitSection;

function Mint() {
  return (
    <div className="min-h-screen bg-background w-full absolute top-[180vh] lg:top-[100vh] ">
      <Divider />
      <div className="flex min-h-[70vh] w-full relative items-center max-w-6xl mx-auto p-4 md:px-6 md:py-6">
        <div className="">
          <div className=" mb-6 max-w max-w-lg">
            <H1 className="">Mint Your Exclusive NFT Pass</H1>
            <P className="">
              Mint your exclusive Early Supporter NFT Pass and unlock lifetime
              DAO benefits.
            </P>
          </div>
          <Button variant={"ghost"} className="">
            Mint Early Supporters NFT
          </Button>
        </div>
        {/* <Image height={240 * 2} width={180 * 2} src="/gif.gif" alt="My GIF" /> */}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div
      className=""
      style={{
        width: "100%",
        height: "1px",
        maxWidth: "1200px",
        backgroundImage:
          "linear-gradient(90deg,rgba(71,71,65,0),#474741 50%,rgba(71,71,65,0))",
        marginBottom: "160px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    ></div>
  );
}
