"use client";
import React, { useEffect, useState } from "react";
import { THomeBannerSlider } from "./HomeBanner";
import Image from "next/image";
type Titems = {
  items: THomeBannerSlider[];
};
function HomeBannerSlider({ items }: Titems) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden relative h-full ">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-1   transition-opacity duration-500 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="  rounded-2xl "
          />

          <div className=" absolute bottom-15 right-5">
            <h3 className="text-white font-bold text-2xl">{item.title}</h3>
            <p className="text-white font-bold mt-3"> {item.subtitle}</p>
            <div className="w-1 h-15 bg-white absolute -right-2 top-0  "></div>
          </div>
          <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 z-10  gap-2 flex">
            {items.map((_, index) => (
              <button
                onClick={() => setCurrent(index)}
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-700 cursor-pointer ${
                  index === current ? "bg-emerald-200 scale-125" : "bg-sky-100"
                }`}
              ></button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeBannerSlider;
