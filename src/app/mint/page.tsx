import React from "react";
import { H1 } from "../../../components/ui/h1";
import { P } from "../../../components/ui/paragraph";
import { Button } from "../../../components/ui/button";

function Page() {
  return (
    <div className="flex w-full min-h-screen items-center max-w-8xl mx-auto p-4 md:px-6 md:py-6">
      <div className="w-full max-w-xl space-y-6 md:space-y-10 flex items-center justify-center sm:items-start flex-col">
        <H1 className="text-center sm:text-left">
          Mint Your Exclusive Early Supporters NFT Pass! <br />
        </H1>

        <P className="text-center sm:text-left">
          Be a part of history, showcase your commitment to VentureX DAO by
          Minting an exclusive Early Supporter NFT Pass. This highly coveted NFT
          grants you lifetime DAO benefits.
        </P>
        {/* <P className="text-center sm:text-left">
          Be part of history by minting your exclusive Early Supporter NFT Pass.
          This highly coveted NFT not only showcases your commitment to VentureX
          DAO but also grants you lifetime DAO benefits, including governance
          voting power, profit sharing, shared token allocations, and much more.
        </P> */}
        <Button variant="ghost" className="w-full max-w-sm">
          <span className="hidden md:block">Mint Early Supporter NFT Pass</span>
          <span className="md:hidden"> Mint NFT Pass</span>
        </Button>
      </div>
    </div>
  );
}

export default Page;
