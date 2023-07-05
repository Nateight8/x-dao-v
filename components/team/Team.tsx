"use client";
import React, { useLayoutEffect, useRef } from "react";
import { H3 } from "../ui/h3";
import { H2 } from "../ui/h2";
import { P } from "../ui/paragraph";
import Link from "next/link";
import Image from "next/image";
import { H1 } from "../ui/h1";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
type Props = {};

function Team({}: Props) {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self?.selector?.(".box");
      boxes.forEach((box: HTMLElement) => {
        gsap.set(box, { y: 10 });

        gsap.to(box, {
          // opacity: 1,
          duration: 2,
          y: 0,
          scrollTrigger: {
            trigger: box,
            start: "top 50%",
            end: "bottom 50%",
            // toggleActions: "play reverse none reverse",
            // markers: true,
            onLeave: () => {
              gsap.to(box, { opacity: 0 });
            },

            onEnterBack: () => {
              gsap.to(box, { opacity: 1 });
            },
            onLeaveBack: () => {
              gsap.to(box, { opacity: 0 });
            },
            onEnter: () => {
              gsap.to(box, { opacity: 1 });
            },
          },
        });
      });
    }, container); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div ref={container} className="min-h-screen  w-full p-4 my-6">
      <div className=" max-w-lg my-6">
        <H1>Meet the Team</H1>
        <P>
          The faces behind Lorem ipsum dolor sit amet consectetur, adipisicing
          elit.
        </P>
      </div>
      <div className=" w-full md:bg-border grid md:grid-cols-2 gap-px">
        <LeftAligned name="Joan Martinez" img="/p2.jpg" />
        <RightAligned name="Layla Davis" img="/p3.jpg" />
        <LeftAligned name="Kamila Hayes " img="/p1.jpg" />
        <RightAligned name="Arjun Rao" img="/pixs.jpg" />
      </div>
    </div>
  );
}

export default Team;

interface ProfileProps {
  name: string;
  img: string;
}

function LeftAligned({ name, img }: ProfileProps) {
  return (
    <div className="box opacity-0 bg-background grid sm:grid-cols-2 hover:cursor-pointer my-4 sm:my-0">
      <div className="min-h-[60vh] bg-[#232328] relative">
        <Image src={img} fill alt="" className="object-cover" />
      </div>
      <div className="flex items-center justify-center flex-col p-4 space-y-4 min-h-[30vh]">
        {/* <div className=""> */}
        <H2 className="text-center uppercase">{name}</H2>
        <P className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          iste. Lorem ipsum dolor sit amet.
        </P>
        <div className="w-[8rem] h-[0.5px] bg-border rounded-full" />
        <div className="flex space-x-3 items-center">
          <Link href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.0071 6.72402C27.9751 7.18435 26.8679 7.49688 25.7063 7.63625C26.8929 6.91829 27.8038 5.778 28.23 4.42233C27.1186 5.08961 25.8901 5.57106 24.5823 5.8329C23.5336 4.70529 22.0419 4 20.3873 4C17.216 4 14.6421 6.60154 14.6421 9.80701C14.6421 10.2632 14.6923 10.7065 14.7926 11.1289C10.0168 10.8881 5.78415 8.57381 2.95126 5.06004C2.45822 5.91737 2.1741 6.91406 2.1741 7.97833C2.1741 9.99284 3.18943 11.7708 4.73122 12.8097C3.7911 12.7802 2.9053 12.5183 2.12814 12.0833C2.12814 12.1087 2.12814 12.1298 2.12814 12.1551C2.12814 14.9678 4.10865 17.3161 6.73681 17.8482C6.2563 17.9791 5.74655 18.0508 5.22426 18.0508C4.85239 18.0508 4.49306 18.0128 4.14208 17.9452C4.87328 20.2512 6.99586 21.9321 9.50702 21.9785C7.53904 23.5369 5.06549 24.466 2.37048 24.466C1.90669 24.466 1.45125 24.4364 1 24.3857C3.54041 26.0329 6.56132 26.9957 9.80786 26.9957C20.3748 26.9957 26.1534 18.148 26.1534 10.4743C26.1534 10.2209 26.1492 9.97172 26.1367 9.72255C27.2606 8.90323 28.2342 7.8812 29.003 6.71557L29.0071 6.72402Z"
                fill="#1D9BF0"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function RightAligned({ name, img }: ProfileProps) {
  return (
    <div className="box opacity-0 bg-background grid sm:grid-cols-2">
      <div className="flex items-center justify-center flex-col p-4 space-y-4">
        {/* <div className=""> */}
        <H2 className="text-center uppercase">{name}</H2>
        <P className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          iste. Lorem ipsum dolor sit amet.
        </P>
        <div className="w-[5rem] h-px bg-border rounded-full" />
        <div className="flex space-x-3 items-center">
          <Link href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.0071 6.72402C27.9751 7.18435 26.8679 7.49688 25.7063 7.63625C26.8929 6.91829 27.8038 5.778 28.23 4.42233C27.1186 5.08961 25.8901 5.57106 24.5823 5.8329C23.5336 4.70529 22.0419 4 20.3873 4C17.216 4 14.6421 6.60154 14.6421 9.80701C14.6421 10.2632 14.6923 10.7065 14.7926 11.1289C10.0168 10.8881 5.78415 8.57381 2.95126 5.06004C2.45822 5.91737 2.1741 6.91406 2.1741 7.97833C2.1741 9.99284 3.18943 11.7708 4.73122 12.8097C3.7911 12.7802 2.9053 12.5183 2.12814 12.0833C2.12814 12.1087 2.12814 12.1298 2.12814 12.1551C2.12814 14.9678 4.10865 17.3161 6.73681 17.8482C6.2563 17.9791 5.74655 18.0508 5.22426 18.0508C4.85239 18.0508 4.49306 18.0128 4.14208 17.9452C4.87328 20.2512 6.99586 21.9321 9.50702 21.9785C7.53904 23.5369 5.06549 24.466 2.37048 24.466C1.90669 24.466 1.45125 24.4364 1 24.3857C3.54041 26.0329 6.56132 26.9957 9.80786 26.9957C20.3748 26.9957 26.1534 18.148 26.1534 10.4743C26.1534 10.2209 26.1492 9.97172 26.1367 9.72255C27.2606 8.90323 28.2342 7.8812 29.003 6.71557L29.0071 6.72402Z"
                fill="#1D9BF0"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="h-[60vh] bg-[#232328] row-start-1 sm:col-start-2 relative">
        <Image src={img} fill alt="" className="object-cover" />
      </div>
    </div>
  );
}
