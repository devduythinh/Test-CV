import React, { useEffect, useRef, useState } from "react";
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
  const mapsRef = useRef(null);
  const [points, setPoints] = useState([]);

  const activities = _get(content, "[0].bloc_2.cases", []);

  const defaultPoint = [
    {
      x: "40%",
      y: "30%",
      icon: MountainIcon,
      id: "map-point1",
      info: "Mountain",
    },
    { x: "50%", y: "45%", icon: FishIcon, id: "map-point2", info: "Fish" },
    { x: "50%", y: "55%", icon: TargetIcon, id: "map-point3", info: "Target" },
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
    <section className="h-full w-full pb-[60px] relative" id="map-section">
      <div className="absolute top-0 left-0 w-full h-full bg-mapBg -z-10 bg-[url('/images/bg-map.svg')] "></div>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-0 z-10">
        <Title title={title} />
        <div
          className="flex gap-2 sm:gap-5 justify-center items-center mt-6 flex-wrap"
          id="map-button-container"
        >
          {points.map((point, index) => (
            <Button
              key={index}
              type="activity"
              iconBefore={
                <Image src={point.icon} alt="Mountain" width={24} height={24} />
              }
              className="rounded-full px-4 pt-2 !font-medium"
              onClick={() => {
                mapsRef.current.setSelectedPoint(point);
                mapsRef.current.zoomToElement(point.id);
              }}
            >
              {point.info}ss
            </Button>
          ))}
        </div>
        <div className=" mt-6 rounded-lg overflow-hidden relative">
          <Maps image={MapImage} points={points} mapsRef={mapsRef} />
        </div>
      </div>
    </section>
  );
}
