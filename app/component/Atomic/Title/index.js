import React from "react";

export default function Title({ title }) {
  return (
    <div className="flex items-center justify-center gap-2 pt-[60px]">
      <div className="flex-1 border-t border-[#BBBBBB]  "></div>
      <h2 className="text-[32px] lg:text-[52px] md:text-[40px] font-semibold text-exploreBg text-center md:text-left">
        {title}
      </h2>
      <div className="flex-1 border-t border-[#BBBBBB]  "></div>
    </div>
  );
}
