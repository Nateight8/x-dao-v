"use client";
import React, { useEffect, useState } from "react";
import { P } from "../ui/paragraph";
import { motion as m, AnimatePresence } from "framer-motion";
// import { H2 } from "../ui/h2";
import { H1 } from "../ui/h1";
import { Button, buttonVariants } from "../ui/button";

type Props = {};

function Hero({}: Props) {
  return (
    <>
      <div className=" w-full min-h-screen flex items-center justify-center mx-auto max-w-screen-2xl p-4 md:px-6 md:py-6">
        <div className="space-y-3 md:space-y-6 py-20 flex justify-center flex-col">
          <H1 className="md:mb-3 text-center">
            Revolutionalize your investment
          </H1>
          <P className=" max-w-3xl mx-auto text-center ">
            Join the movement and shape the future of venture capitalist through
            community driven togetherness with $XDAO tokens.
          </P>
          <div className="grid sm:px-6 sm:grid-cols-2 gap-4 py-6">
            <m.button
              // whileHover={{ background: "" }}
              className={buttonVariants({
                variant: "ghost",
                className: "w-full",
              })}
            >
              Create Wallet
            </m.button>
            <Button className="w-full">Connect Wallet</Button>
          </div>
        </div>
      </div>
      <Tokenomics />
    </>
  );
}

export default Hero;

function Tokenomics({}: Props) {
  const tiles = [
    { id: "sa", amount: "500M", label: "Total Supply" },
    { id: "aa", amount: "$ 4000", label: "Treasury" },
    { id: "5s", amount: "12000", label: "Total Staked" },
  ];

  const [count, setcount] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setcount((e) => e + 1);
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="bg-[#201e29] w-full  ">
        <div className="grid p-6  md:grid-cols-3 min-h-[15vh] gap-4 mx-auto max-w-screen-2xl md:p-4 md:px-6 md:py-6">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="flex items-center justify-center flex-col space-y-1 p-6"
            >
              <AnimatePresence>
                <m.div exit={{ y: 300 }}>
                  <H1>{tile.amount}</H1>
                </m.div>
              </AnimatePresence>
              <P>{tile.label}</P>
            </div>
          ))}
        </div>
      </div>
      <Build />
    </>
  );
}

function Build({}: Props) {
  return (
    <>
      <div className="flex w-full h-screen items-center mx-auto max-w-screen-2xl p-4 md:px-6 md:py-6">
        <div className="max max-w-lg">
          <H1>Build your investment</H1>
          <P>
            Build your assets by procuring $XDAO tokens . Be among the first
            people to buy.
          </P>
        </div>
      </div>
    </>
  );
}
