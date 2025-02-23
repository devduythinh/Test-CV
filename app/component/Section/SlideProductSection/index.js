"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProdImg1 from "@/public/images/prd-slide-1.svg";
import ProdImg2 from "@/public/images/prd-slide-2.svg";
import ProdImg3 from "@/public/images/prd-slide-3.svg";
import ProdImg4 from "@/public/images/prd-slide-4.svg";

import NextIcon from "@/public/icons/next.svg";
import NextWhiteIcon from "@/public/icons/next-white.svg";
import Button from "../../Atomic/Button";
import { useLanguage } from "../../Context/LanguageContext";
import _get from "lodash/get";

// Sample product data
const products = [
  {
    id: 1,
    name: "Classic Watch",
    price: "$199",
    image: ProdImg1,
    title: "Titre",
    subtitle: "Sous titre",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    buttonText: "En savoir plus",
  },
  {
    id: 2,
    name: "Leather Bag",
    price: "$149",
    image: ProdImg2,
    title: "Titre",
    subtitle: "Sous titre",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    buttonText: "En savoir plus",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "$89",
    image: ProdImg3,
    title: "Titre",
    subtitle: "Sous titre",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    buttonText: "En savoir plus",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: "$129",
    image: ProdImg4,
    title: "Titre",
    subtitle: "Sous titre",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    buttonText: "En savoir plus",
  },
];

export default function ProductSlider() {
  const { content } = useLanguage();
  const title = _get(content, "[0].bloc_3.title", "");
  const more = _get(content, "[0].bloc_3.more_info", "");

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const listPrd = _get(content, "[0].bloc_3.cases", [])
    .map((item, index) => ({
      id: index,
      image: products[index].image,
      title: item.tagline,
      subtitle: item.category,
      text: item.description,
    }))
    .slice(0, 4);
  return (
    <div className="bg-white md:py-3">
      <div className="relative px-4 py-8 md:py-16 sm:py-24 max-w-[1240px] mx-auto">
        <div className="flex justify-center sm:justify-between  items-end">
          <h2 className="text-[32px] sm:text-[40px] text-centet sm:text-left font-semibold text-exploreBg uppercase">
            {title}
          </h2>
          <div className=" items-center gap-2 text-xl font-medium text-[#666666] border-b border-[#666666] h-fit hidden sm:flex">
            {more}
            <Image src={NextIcon} alt="next" width={18} height={15} />
          </div>
        </div>
        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {listPrd.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt="product image"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="pt-5">
                    <div className="space-y-2">
                      <h3 className="text-exploreBg text-xs sm:text-xl font-medium">
                        {product.title}
                      </h3>
                      <h2 className="sm:text-[28px] text-base sm:leading-[32px] font-medium text-headerBg">
                        {product.subtitle}
                      </h2>
                      <p className="text-productText/80 line-clamp-3 sm:text-lg border-l border-[#BBBBBB] ml-1 pl-2">
                        {product.text}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button
          type="explore"
          className="rounded-full  w-full mt-5 sm:hidden"
          iconAfter={
            <Image src={NextWhiteIcon} alt="next" width={18} height={15} />
          }
        >
          {more}
        </Button>
      </div>
    </div>
  );
}
