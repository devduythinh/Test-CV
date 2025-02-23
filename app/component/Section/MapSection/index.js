import React, { useEffect, useState } from "react";
import Button from "../../Atomic/Button";

import Image from "next/image";
import MapImage from "@/public/images/map.svg";
import MapBg from "@/public/images/bg-map.svg";

import MountainIcon from "@/public/icons/mountain-dark.svg";
import FishIcon from "@/public/icons/fish-dark.svg";
import TargetIcon from "@/public/icons/target-dark.svg";

import Title from "../../Atomic/Title";
import Maps from "./Maps";
import { useLanguage } from "../../Context/LanguageContext";
import _get from "lodash/get";

export default function MapSection() {
  const { content } = useLanguage();
  const [points, setPoints] = useState([]);

  const activities = _get(content, "[0].bloc_2.cases", []);
  console.log("activities", activities);

  const defaultPoint = [
    { x: "20%", y: "20%", icon: MountainIcon, id: 1, info: "Mountain" },
    { x: "30%", y: "15%", icon: FishIcon, id: 2, info: "Fish" },
    { x: "50%", y: "25%", icon: TargetIcon, id: 3, info: "Target" },
  ];

  useEffect(() => {
    if (activities.length > 0) {
      setPoints(
        activities.map((activity, index) => ({
          x: defaultPoint[index].x,
          y: defaultPoint[index].y,
          icon: defaultPoint[index].icon,
          id: index,
          info: activity,
        }))
      );
    }
  }, [activities]);
  console.log("content", content);
  // bloc_2_2
  const title = _get(content, "[0].bloc_2.title", "");

  return (
    <section className="h-full w-full bg-mapBg pb-[60px] relative">
      <Image
        src={MapBg}
        alt="Map"
        width={1920}
        height={986}
        className="w-full h-full absolute top-0 left-0 z-1 object-cover"
      />
      <div className="max-w-[1240px] mx-auto px-4">
        <Title title={title} />
        <div className="flex gap-2 sm:gap-5 justify-center items-center mt-6 flex-wrap">
          {points.map((point, index) => (
            <Button
              key={index}
              type="activity"
              iconBefore={
                <Image src={point.icon} alt="Mountain" width={24} height={24} />
              }
              className="rounded-full px-4 pt-2 !font-medium"
            >
              {point.info}
            </Button>
          ))}
        </div>
        <div className=" mt-6 rounded-lg overflow-hidden relative">
          <Maps image={MapImage} points={points} />
        </div>
      </div>
    </section>
  );
}
