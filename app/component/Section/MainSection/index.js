"use client";

import React from "react";
import Header from "./Header";
import MountainIcon from "@/public/icons/mountain.svg";
import FishIcon from "@/public/icons/fish.svg";
import TargetIcon from "@/public/icons/target.svg";
import Image from "next/image";
import { useLanguage } from "../../Context/LanguageContext";

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
      <div className="flex justify-around items-center h-fit absolute bottom-9 gap-2 py-6 px-2 w-full border-t border-white/30 max-w-screen-xl left-1/2 -translate-x-1/2">
        {ItemActivity.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={item.icon} alt={item.title} width={24} height={24} />
            <p className="lg:hidden">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
