import React from "react";
import ExploreCard from "./components/ExploreCard";

type Props = {};

function page({}: Props) {
  return (
    <main className="">
      <div className="min-h-screen w-full  grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15].map((item) => (
          <ExploreCard key={item} />
        ))}
      </div>
    </main>
  );
}

export default page;
