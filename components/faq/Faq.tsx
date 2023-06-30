"use client";
import React, { useLayoutEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { P } from "../ui/paragraph";
import { H2 } from "../ui/h2";
import { H1 } from "../ui/h1";
import { Button } from "../ui/button";
import { faq } from "@/lib/utils/Faq";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
function Faq() {
  const main = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".faq", {
        opacity: 0.3,
        scale: 0.8,
        scrollTrigger: {
          pin: ".faq",
          // markers: true,
          start: "top 100vh",
          scrub: true,
        },
      });
    }, main);

    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div ref={main} className="relative min-h-[200vh] p-4">
      <section className="min-h-screen w-full absolute top-0 flex items-center justify-center">
        <div className="faq grid md:grid-cols-3  w-full gap-6 max-w-3xl md:min-h-screen">
          <div className=" md:p-4 space-y-2">
            <H2>Frequently Asked Questions</H2>
            <P>
              Have a question that is not answered? you are invited to join us
              on discord
            </P>
          </div>
          <div className="col-start-2 col-span-full">
            <Accordion type="single" collapsible className="w-full">
              {/* <div className="space-y-2"> */}
              {faq.map((qes) => (
                <AccordionItem key={qes.id} value={qes.id} className="my-2">
                  <AccordionTrigger>{qes.quest}</AccordionTrigger>
                  <AccordionContent>
                    <P className="text-base whitespace-pre-line">{qes.ans}</P>
                  </AccordionContent>
                </AccordionItem>
              ))}
              {/* </div> */}
            </Accordion>
          </div>
        </div>
      </section>
      <Mint />
    </div>
  );
}

export default Faq;

function Mint() {
  return (
    <div className="min-h-screen bg-background w-full absolute top-[100vh] ">
      <Divider />
      <div className="flex w-full relative items-start max-w-6xl mx-auto p-4 md:px-6 md:py-6">
        <div className="">
          <div className=" mb-6 max-w max-w-lg">
            <H1 className="">Mint Your Exclusive NFT Pass</H1>
            <P className="">
              {/* Showcases your commitment to VentureX DAO by minting the Limited
              Edition NFT for Early Supporters and gain access to lifetime DAO
              benefits */}
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
