import React from "react";

export default function Title({ title }) {
  return (
    <div className="flex items-center justify-center gap-2 px-8 pt-8">
      <div className="flex-1 border-t border-[#BBBBBB] hidden sm:block"></div>
      <h2 className="text-[32px] sm:text-[40px] font-semibold text-exploreBg">
        {title}
      </h2>
      <div className="flex-1 border-t border-[#BBBBBB] hidden sm:block"></div>
    </div>
  );
}
