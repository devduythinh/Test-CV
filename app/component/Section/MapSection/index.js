import React from "react";
import Button from "../../Atomic/Button";
import MountainIcon from "@/public/icons/mountain-dark.svg";
import FishIcon from "@/public/icons/fish-dark.svg";
import TargetIcon from "@/public/icons/target-dark.svg";
import Image from "next/image";
import MapImage from "@/public/images/map.svg";
import TagMapIcon from "@/public/icons/tag-map.svg";
import MapBg from "@/public/images/bg-map.svg";
import PingIcon from "@/public/icons/ping.svg";
import Title from "../../Atomic/Title";

const PingItem = ({ icon, title, top, left }) => {
  return (
    <div className="absolute" style={{ top: top, left: left }}>
      <div className="relative">
        <Image src={PingIcon} alt="Location" width={32} height={42} />
        <div className="absolute top-1 left-0 w-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center p-1">
            <Image src={icon} alt="Location" width={14} height={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MapSection() {
  return (
    <section className="h-full w-full bg-mapBg pb-14 relative">
      <Image
        src={MapBg}
        alt="Map"
        width={1240}
        height={1240}
        className="w-full h-full absolute top-0 left-0 z-1"
      />
      <div className="max-w-[1240px] mx-auto px-4">
        <Title title="TITRE" />
        <div className="flex gap-2 sm:gap-5 justify-center items-center mt-6 flex-wrap">
          <Button
            iconBefore={
              <Image src={MountainIcon} alt="Mountain" width={24} height={24} />
            }
            type="activity"
            className="rounded-full px-4 pt-2 !font-medium"
          >
            Activité 1
          </Button>
          <Button
            type="activity"
            iconBefore={
              <Image src={FishIcon} alt="Mountain" width={24} height={24} />
            }
            className="rounded-full px-4 pt-2 !font-medium"
          >
            Activité 2
          </Button>
          <Button
            type="activity"
            iconBefore={
              <Image src={TargetIcon} alt="Mountain" width={24} height={24} />
            }
            className="rounded-full px-4 pt-2 !font-medium"
          >
            Activité 3
          </Button>
        </div>
        <div className=" mt-6 rounded-lg overflow-hidden relative">
          <Image
            src={MapImage}
            alt="Map"
            width={1240}
            height={1240}
            className="min-h-[600px] object-cover"
          />
          <div className="absolute top-4 left-4 rounded-lg flex justify-center items-center gap-1 bg-white/60 backdrop-blur-sm text-activityText p-2">
            <Image src={TagMapIcon} alt="Location" width={40} height={40} />
            <p className="text-xl font-medium">Emplacement</p>
          </div>
          <PingItem icon={FishIcon} title="Emplacement" top="30%" left="30%" />
          <PingItem
            icon={MountainIcon}
            title="Emplacement"
            top="50%"
            left="30%"
          />
          <PingItem
            icon={TargetIcon}
            title="Emplacement"
            top="20%"
            left="60%"
          />
        </div>
      </div>
    </section>
  );
}
