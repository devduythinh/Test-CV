"use client";

import { useImperativeHandle, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";
import PingIcon from "@/public/icons/ping.svg";
import TagMapIcon from "@/public/icons/tag-map.svg";

const PingItem = ({ icon, top, left, onClick, id }) => {
  return (
    <div
      className="absolute"
      style={{ top: top, left: left }}
      onClick={onClick}
      id={id}
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

const MapContent = ({
  setSelectedPoint,
  zoomToElement,
  mapsRef,
  image,
  points,
  selectedPoint,
  resetTransform,
}) => {
  useImperativeHandle(
    mapsRef,
    () => ({
      setSelectedPoint,
      zoomToElement: (id) => {
        const pointElement = document.getElementById(id);
        if (pointElement) {
          zoomToElement(pointElement, 1.7);
        }
        const mapContainer = document.getElementById("map-section");
        if (mapContainer) {
          mapContainer.scrollIntoView({ behavior: "smooth" });
        }
      },
      resetTransform,
    }),
    []
  );

  return (
    <>
      <div className="absolute z-10 top-4 left-4 rounded-lg flex justify-center items-center gap-1 bg-white/60 backdrop-blur-sm text-activityText py-1 px-[10px]">
        <Image
          src={TagMapIcon}
          alt="Location"
          width={40}
          height={40}
          className="w-8 lg:w-10 h-8 lg:h-10"
        />
        <p className="text-[16px] lg:text-xl font-medium">Emplacement</p>
      </div>

      <TransformComponent
        wrapperClass="rounded-lg !w-full !h-full"
        contentClass="rounded-lg !w-full !h-full"
      >
        <div className="relative">
          {/* Hình ảnh bản đồ */}
          <Image
            src={image}
            alt="Map"
            width={1920}
            height={986}
            className="w-full h-full object-cover"
          />

          {/* Các điểm vị trí */}
          {points.map((point, index) => (
            <PingItem
              key={index}
              id={point.id}
              icon={point.icon}
              top={point.y}
              left={point.x}
              onClick={(e) => {
                setSelectedPoint(point);
                zoomToElement(e.currentTarget, 2);
              }}
            />
          ))}
        </div>

        {/* Popup hiển thị khi chọn điểm */}
        {selectedPoint && (
          <div
            className="absolute bg-white text-gray-800 p-3 rounded-lg shadow-lg border border-gray-300 transition-opacity duration-300 animate-fade-in"
            style={{
              top: `${selectedPoint.y}`,
              left: `${selectedPoint.x}`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <p className="text-[8px] font-semibold">{selectedPoint.info}</p>
            <button
              className="mt-2 px-2 py-1 text-[6px] bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => {
                setSelectedPoint(null);
                resetTransform();
              }}
            >
              Close
            </button>
          </div>
        )}
      </TransformComponent>
    </>
  );
};

export default function Maps({ image, points, mapsRef }) {
  const [selectedPoint, setSelectedPoint] = useState(null);

  return (
    <div className="flex flex-col items-center h-[600px]" id="map-container">
      <TransformWrapper
        wheel={{ disabled: false }}
        initialScale={1.2}
        minScale={1.1}
        limitToBounds={true}
      >
        {({ zoomToElement, resetTransform }) => (
          <MapContent
            {...{
              image,
              points,
              mapsRef,
              zoomToElement,
              setSelectedPoint,
              selectedPoint,
              resetTransform,
            }}
          />
        )}
      </TransformWrapper>
    </div>
  );
}
