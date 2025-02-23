"use client";

import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";
import PingIcon from "@/public/icons/ping.svg";
import TagMapIcon from "@/public/icons/tag-map.svg";

const PingItem = ({ icon, top, left, onClick }) => {
  return (
    <div
      className="absolute"
      style={{ top: top, left: left }}
      onClick={onClick}
    >
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

export default function Maps({ image, points }) {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handleAddPoint = (event) => {};

  return (
    <div className="flex flex-col items-center">
      <TransformWrapper
        wheel={{ disabled: false }}
        initialScale={1.2}
        minScale={1.1}
      >
        <TransformComponent
          wrapperClass="rounded-lg !w-full !h-auto"
          contentClass="rounded-lg !w-full !h-auto"
        >
          <div className="relative" onClick={handleAddPoint}>
            {/* Hình ảnh bản đồ */}
            <Image
              src={image}
              alt="Map"
              className="w-full h-full object-cover"
            />

            {/* Các điểm vị trí */}
            {points.map((point, index) => (
              <PingItem
                key={index}
                icon={point.icon}
                top={point.y}
                left={point.x}
                onClick={() => setSelectedPoint(point)}
              />
            ))}
          </div>
          {selectedPoint && (
            <div
              className="absolute bg-white text-gray-800 p-3 rounded-lg shadow-lg border border-gray-300 transition-opacity duration-300 animate-fade-in"
              style={{
                top: `${selectedPoint.y}`, // Dịch tooltip lên trên một chút
                left: `${selectedPoint.x}`, // Dịch sang phải một chút
                transform: "translate(-50%, -100%)",
              }}
            >
              {/* Mũi tên của tooltip */}

              <p className="text-sm font-semibold">{selectedPoint.info}</p>
              <button
                className="mt-2 px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={() => setSelectedPoint(null)}
              >
                Đóng
              </button>
            </div>
          )}
        </TransformComponent>
        <div className="absolute z-10 top-4 left-4 rounded-lg flex justify-center items-center gap-1 bg-white/60 backdrop-blur-sm text-activityText py-1 px-[10px]">
          <Image src={TagMapIcon} alt="Location" width={40} height={40} />
          <p className="text-xl font-medium">Emplacement</p>
        </div>
      </TransformWrapper>
    </div>
  );
}
