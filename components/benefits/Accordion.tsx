"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { H2 } from "../ui/h2";
import { P } from "../ui/paragraph";

type Props = {};

function Accordion({}: Props) {
  const container = useRef(null);
  const tl = useRef();

  // const toggleTimeline = () => {
  //   tl.current.reversed(!tl.current.reversed());
  // };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // gsap.set(".title", {  });
      gsap.set(".detail", { y: 15, opacity: 0 });
      gsap
        .timeline()
        .to(".title", { rotate: 0, transformOrigin: "left" })
        .to(".title", { y: -15 })
        .to(".detail", { y: -15, opacity: 1 });
    }, container); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div
      ref={container}
      className="h-screen w-full flex items-center justify-center"
    >
      <div
        // onClick={() => toggleTimeline}
        // key={item.id}
        className={`border  w-full rounded-3xl flex relative items-end transition-all duration-1000 ease-in-out justify-center border-slate-100/10 min-h-[60vh] p-4 shadow-black/40 shadow-lg hover:cursor-pointer `}
      >
        <div className="relative z-10">
          <H2
            // style={{ rotate: -90, transformOrigin: "left" }}
            className={` -rotate-90 origin-left title whitespace-nowrap`}
          >
            She is King
          </H2>
          <P className="detail">
            Some Texts to prove that she is king Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Minus sapiente ad nemo dolores minima
            quidem ut animi fugiat asperiores. Nemo in distinctio minus magni
            sequi placeat totam libero sunt perspiciatis.
          </P>
        </div>
        <div className="absolute inset-0 z-0 shadow-black/40 shadow-lg"></div>
      </div>
    </div>
  );
}

export default Accordion;
