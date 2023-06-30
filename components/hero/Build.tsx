import React from "react";
import { H1 } from "../ui/h1";
import { P } from "../ui/paragraph";

type Props = {};

function Build({}: Props) {
  return (
    <>
      <div className="flex w-full min-h-screen items-center max-w-6xl mx-auto p-4 md:px-6 md:py-6">
        <div className=" max-w-lg">
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

export default Build;
