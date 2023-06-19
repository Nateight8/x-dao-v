"use client";
import React, { useEffect, useState } from "react";
import { P } from "../ui/paragraph";
import { motion as m, AnimatePresence } from "framer-motion";
// import { H2 } from "../ui/h2";
import { H1 } from "../ui/h1";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  return (
    <>
      <div className="flex-col w-full min-h-screen flex items-center justify-center mx-auto max-w-screen-2xl p-4 md:px-6 md:py-6">
        <div className="space-y-3 md:space-y-6 py-20 flex items-center justify-center flex-col">
          <LinkToDocs />
          <H1 className="md:mb-3 text-center">
            Revolutionalize your investment
          </H1>
          <P className=" max-w-3xl mx-auto text-center mb-6">
            Join the movement and shape the future of venture capitalist through
            community driven togetherness with{" "}
            <span className="font-bold">$XDAO </span> tokens.
          </P>
          {/* <div className="grid sm:px-6 sm:grid-cols-2 gap-4 py-6 max-w-xl mx-auto"> */}
          <m.button
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
              // className: "my-6",
            })}
          >
            Create Wallet
          </m.button>
          {/* <Button className="w-full">Connect Wallet</Button> */}
          {/* </div> */}
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

  return (
    <>
      <div className="bg-[#181a21] w-full  ">
        <div className="grid p-6  md:grid-cols-3 min-h-[15vh] gap-4 mx-auto max-w-screen-xl md:p-4 md:px-6 md:py-6">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="flex items-center justify-center flex-col space-y-1 p-6"
            >
              <m.div exit={{ y: 300 }}>
                <H1>{tile.amount}</H1>
              </m.div>

              <P>{tile.label}</P>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function LinkToDocs() {
  return (
    <Link
      href="/"
      className=" my-6 opacity-75 hover:opacity-100 transition-all ease-in-out flex items-center gap-x-2 text-left tracking-wider w-fit bg-radial-gradient-default px-5 py-1 rounded-full border border-border"
    >
      <P className="text-sm"> Litepaper</P>
      <div className="h-[3px] w-[3px] rounded-full bg-primary" />
      <P className="text-sm"> Read the Docs</P>
      <svg
        width="10"
        height="9"
        viewBox="0 0 10 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.70508 4.61133L6.13867 8.39258C6.07422 8.47852 5.9668 8.5 5.88086 8.5C5.79492 8.5 5.70898 8.47852 5.64453 8.41406C5.49414 8.28516 5.49414 8.07031 5.62305 7.94141L8.63086 4.71875H0.53125C0.337891 4.71875 0.1875 4.56836 0.1875 4.39648C0.1875 4.22461 0.337891 4.03125 0.53125 4.03125H8.63086L5.62305 0.830078C5.49414 0.701172 5.49414 0.486328 5.64453 0.357422C5.79492 0.228516 6.00977 0.228516 6.13867 0.378906L9.70508 4.16016C9.83398 4.28906 9.83398 4.48242 9.70508 4.61133Z"
          fill="currentColor"
        ></path>
      </svg>
    </Link>
  );
}
