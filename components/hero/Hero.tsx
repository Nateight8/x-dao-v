import React from "react";
import { P } from "../ui/paragraph";

// import { H2 } from "../ui/h2";
import { H1 } from "../ui/h1";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="min-h-[90vh] w-full flex items-center mx-auto max-w-screen-2xl p-4 md:px-6 md:py-6">
      <div className="">
        <H1 className="mb-3">VentureX DAO</H1>
        <P className=" max-w-3xl ">
          Embark on a transformative journey with VentureX DAO, where we believe
          that true financial empowerment is a collective endeavor. Join our
          inclusive community, where individuals from all walks of life come
          together to unlock the boundless possibilities of wealth creation.
        </P>
      </div>
    </div>
  );
}

export default Hero;
