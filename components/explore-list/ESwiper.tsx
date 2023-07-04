"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ExploreCard from "@/app/explore/components/ExploreCard";
import { Skeleton } from "../ui/skeletopn";
import Link from "next/link";
import { H1 } from "../ui/h1";
import { P } from "../ui/paragraph";
import { buttonVariants } from "../ui/button";

type Props = {};

function ESwiper({}: Props) {
  return (
    <div className="min-h-screen w-full flex items-center">
      <div className="w-full">
        <div className="flex w-full items-end justify-between  mx-auto p-4 md:px-6 md:py-6">
          <div className=" max-w-lg">
            <H1>Investments Overview</H1>
            <P>
              Gain insights into the performance of each project and track the
              growth of your holdings.
            </P>
          </div>
          <Link href="/explore" className="hidden md:block">
            Explore More
          </Link>
        </div>
        <Swiper
          className="w-full px-3"
          slidesPerView={1.3}
          breakpoints={{
            640: {
              slidesPerView: 2,
              // spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              // spaceBetween: 16,
            },
            1024: {
              slidesPerView: 6,
              // spaceBetween: 16,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <SwiperSlide key={item} className="p-3">
              <ExploreCard />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full p-4 md:hidden">
          <Link
            href="/explore"
            className={buttonVariants({
              variant: "ghost",
              className: "w-full",
            })}
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ESwiper;
