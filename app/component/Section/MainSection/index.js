"use client";

import React from "react";
import Header from "./Header";
import MountainIcon from "@/public/icons/mountain.svg";
import FishIcon from "@/public/icons/fish.svg";
import TargetIcon from "@/public/icons/target.svg";
import Image from "next/image";

const MainSection = () => {
  const ItemActivity = [
    {
      icon: MountainIcon,
      title: "Activité 1",
    },
    {
      icon: FishIcon,
      title: "Activité 2",
    },
    {
      icon: TargetIcon,
      title: "Activité 3",
    },
  ];

  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url('/images/heroImage.svg')` }}
    >
      <Header />
      <div className=" h-fit absolute bottom-9 py-6 w-full border-t border-white/30 max-w-screen-xl left-1/2 -translate-x-1/2">
        <div className="flex w-full md:px-20">
          {ItemActivity.map((item, index) => (
            <div key={index} className="flex flex-col items-center py-5 flex-1">
              <Image
                src={item.icon}
                alt={item.title}
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <p className="lg:hidden">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
