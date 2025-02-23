// MemorableMoment Component
"use client ";

import Image from "next/image";
import { useLanguage } from "../../Context/LanguageContext";
import _get from "lodash/get";
import { useEffect, useState } from "react";

const listRvDefault = [
  {
    src: "/images/Moment.png",
    alt: "Colorful fruit platter arrangement",
  },
  {
    src: "/images/avocado.png",
    alt: "Colorful fruit platter arrangement",
  },
  {
    src: "/images/cherry.png",
    alt: "Colorful fruit platter arrangement",
  },
  {
    src: "/images/orange.png",
    alt: "Colorful fruit platter arrangement",
  },
  {
    src: "/images/orangeSplitted.png",
    alt: "Colorful fruit platter arrangement",
  },
];
export default function MemorableMoment() {
  const { content } = useLanguage();
  const reviews = _get(content, "[0].bloc_5.reviews", []);
  const [review, setReview] = useState(null);
  const [listReview, setListReview] = useState([]);

  useEffect(() => {
    if (reviews.length > 0) {
      setListReview([
        ...[...reviews]
          .slice(1)
          .map((item, index) => ({ ...item, ...listRvDefault[index + 1] })),
      ]);
      console.log("review", { ...reviews[0], ...listRvDefault[0] });
      setReview({ ...reviews[0], ...listRvDefault[0] });
    }
  }, [reviews]);

  const handleClickReview = (selectedReview) => {
    setReview(selectedReview);
  };

  const title = _get(content, "[0].bloc_5.title", "");
  const text = _get(content, "[0].bloc_5.text", "");
  const footer = _get(content, "[0].bloc_5.footer", "");

  const styledText = text.replace(
    /#(\w+)/g,
    '<span class="font-bold">#$1</span>'
  );

  if (reviews.length === 0) return null;

  return (
    <section
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), #EAFCFF`,
      }}
    >
      <div className="relative max-w-[1240px] mx-auto overflow-hidden lg:pb-20">
        <div className="mx-auto  space-y-6 sm:space-y-10 md:px-8">
          <div className="px-4 sm:px-8 md:px-0 pt-8 md:pt-[60px] sm:pt-12 flex flex-col sm:flex-row gap-1 sm:gap-8">
            <p className="uppercase text-2xl font-semibold text-activityText sm:order-2 sm:flex-1  sm:my-auto  md:text-[40px] ">
              {title}
            </p>
            <p
              className="text-sm md:text-4 lg:text-lg  text-activityText sm:order-1 sm:flex-1 "
              dangerouslySetInnerHTML={{ __html: styledText }}
            />
          </div>
          {/* Hero Section */}
          <div
            className="overflow-hidden sm:rounded-2xl sm:mx-8 md:mx-0"
            style={{
              background: `url('/images/moment-2.png')`,
            }}
          >
            <div className="relative my-4 sm:my-6 md:my-[44px] lg:my-[52px] mx-4 sm:mx-6 md:mx-[60px] lg:mx-[105px] rounded-3xl bg-white">
              <Image
                src="/images/Moment.png"
                alt="Colorful fruit platter arrangement"
                width={1200}
                height={800}
                className="w-full object-cover h-[213px] sm:h-[424px] lg:h-[460px] p-2 sm:p-4 lg:p-4"
              />

              <div className="flex justify-between pt-2 px-6 pb-6">
                <div className="flex flex-col">
                  <div className="flex justify-between mb-1 sm:mb-0">
                    <h1 className="mb-2 text-xl lg:text-2xl font-bold text-gray-900">
                      {review?.author || ""}
                    </h1>
                    <p className="text-sm sm:hidden block text-black text-[14px] h-fit whitespace-nowrap py-[6px] px-4 rounded-full border border-[rgba(102,102,102,0.10)]">
                      {review?.date || ""}
                    </p>
                  </div>
                  <p className="mb-2 text-gray-600">{review?.review || ""}</p>
                </div>
                <p className="text-sm hidden sm:block text-black lg:text-[20px] h-fit whitespace-nowrap py-[6px] px-4 rounded-full border border-[rgba(102,102,102,0.10)]">
                  {review?.date || ""}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-5 px-5 sm:px-8 sm:gap-8 md:px-0 md:gap-8 lg:gap-10 md:grid-cols-4">
              {listReview.map((image, i) => (
                <div
                  key={i}
                  className={`group relative aspect-square overflow-hidden rounded-[20px] ${image.bg}`}
                  onClick={() => handleClickReview(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/40 p-2 sm:p-4 text-white opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs sm:text-sm font-medium flex gap-1">
                      <Image
                        src="/icons/instagram-outline.svg"
                        alt="user"
                        width={16}
                        height={16}
                      />
                      Anthony Durand
                    </span>
                    <Image
                      src="/icons/ArrowUpRight.svg"
                      alt="detail"
                      width={28}
                      height={28}
                      className="w-4 h-4 sm:w-7 sm:h-7"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#666] text-sm text-center px-6 pb-8 ">
              {footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
