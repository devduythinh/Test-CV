"use client";

import Image from "next/image";
import MainSection from "./component/Section/MainSection";
import ChatIcon from "@/public/icons/chat.svg";
import Button from "./component/Atomic/Button";
import ProductSection from "./component/Section/ProductSection";
import MapSection from "./component/Section/MapSection";
import CalendarSection from "./component/Section/CalendarSection";
import ProductSlider from "./component/Section/SlideProductSection";
import MarketingSection from "./component/Section/MarketingSection";
import HeroSection from "./component/Section/HeroSection";
import LanguageSwitcher from "./component/Section/LanguageSwitcher";
import MemorableMoment from "./component/Section/MemorableMoment";

export default function Home() {
  return (
    <div className="relative">
      <MainSection />
      <ProductSection />
      <MapSection />
      <CalendarSection />
      <ProductSlider />
      <MarketingSection />
      <MemorableMoment />
      <HeroSection />
      <Button
        className="fixed bottom-28 right-4 rounded-full w-[34px] h-[34px] sm:w-14 sm:h-14 !p-2 md:!p-3.5 z-[1000]"
        type="explore"
      >
        <Image src={ChatIcon} alt="Chat" width={34} height={34} />
      </Button>
      <LanguageSwitcher />
    </div>
  );
}
