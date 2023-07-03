import Image from "next/image";
import React from "react";
import { AspectRatio } from "../../../../components/ui/aspect-ratio";
import { H2 } from "../../../../components/ui/h2";
import { H3 } from "../../../../components/ui/h3";
import Link from "next/link";

type Props = {};

function ExploreCard({}: Props) {
  return (
    <Link href="/explore/project">
      <div className="h-[16.7rem] rounded-md border border-slate-100/10 hover:cursor-pointer ">
        <div className="bg-muted h-[14.7rem] p-1 rounded overflow-hidden">
          {/* <Image
          src=""
          alt=""
          fill
          className="rounded-md object-cover"
        /> */}
          <div className="bg-red-100/5 w-full h-full  rounded"></div>
        </div>
        <div className="p-1">
          <H2 className="text text-sm">JohnyDao</H2>
        </div>
      </div>
    </Link>
  );
}

export default ExploreCard;
