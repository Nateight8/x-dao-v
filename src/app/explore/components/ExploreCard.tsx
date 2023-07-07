import Image from "next/image";
import React from "react";
import { AspectRatio } from "../../../../components/ui/aspect-ratio";
import { H2 } from "../../../../components/ui/h2";
import { H3 } from "../../../../components/ui/h3";
import Link from "next/link";
import { P } from "../../../../components/ui/paragraph";

type Props = {};

function ExploreCard({}: Props) {
  return (
    <Link href="/explore/project">
      <div className="min-h-[16.7rem] relative rounded-md border border-slate-100/10 transition-all duration-1000 hover:border-slate-100/30 hover:cursor-pointer ">
        <div className="bg-muted h-[14.7rem] p-1 rounded overflow-hidden">
          {/* <Image
          src=""
          alt=""
          fill
          className="rounded-md object-cover"
        /> */}
          <div className="bg-red-100/5 w-full h-full  rounded"></div>
        </div>
        <div className="p-3">
          <H2 className="text text-sm">Name of Project</H2>
          <div className="grid grid-cols-2 gap-2 py-3">
            <div className="">
              <P>Invested</P>
              <P className="font-heading">75 Eth</P>
            </div>
            <div className="">
              <P>Currently at</P>
              <P className="font-heading">+125</P>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ExploreCard;
