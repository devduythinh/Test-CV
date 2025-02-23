"use client";

import React from "react";
import Header from "./Header";
import MountainIcon from "@/public/icons/mountain.svg";
import FishIcon from "@/public/icons/fish.svg";
import TargetIcon from "@/public/icons/target.svg";
import Image from "next/image";
import _get from "lodash/get";
import { useLanguage } from "../../Context/LanguageContext";

const MainSection = () => {
  const { content } = useLanguage();

  const ItemActivity = [
    {
      icon: MountainIcon,
      title: _get(content, "[0].banner_menu[0]", ""),
    },
    {
      icon: FishIcon,
      title: _get(content, "[0].banner_menu[1]", ""),
    },
    {
      icon: TargetIcon,
      title: _get(content, "[0].banner_menu[2]", ""),
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
              <p className="lg:hidden text-white text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
