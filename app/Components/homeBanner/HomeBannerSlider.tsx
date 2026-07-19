"use client";

import { homeBanner } from "@/app/Type/Type";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../button/Button";

type HomeBannerSliderProps = {
  items: homeBanner[];
};

function HomeBannerSlider({ items }: HomeBannerSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [items.length, current]);
  return (
    <div className="relative flex mx-auto  max-w-310 h-110  overflow-hidden  ">
      {items.map((slide, index) => (
        <div
          key={index}
          className={`absolute   inset-0 transition-opacity duration-700   ${
            index === current
              ? "opacity-100 pointer-events-auto "
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div>
            <Image
              src={slide.image}
              alt="بنر"
              fill
              className="object-cover rounded-2xl "
              quality={100}
              sizes="100vw"
            />

            <div className="absolute inset-0  bg-linear-to-l  rounded-2xl from-white/70 via-white/20 to-transparent"></div>
          </div>
          <div className="absolute right-10 top-25 flex flex-col gap-5">
            <h5 className=" text-sm text-[#1e7224]">{slide.collectionTitle}</h5>
            <h1 className="text-3xl font-bold text-[#1B5E20]">
              {slide.bannerTitle}
            </h1>
            <ul className="text-[#4B5563]">
              <li>{slide.subTitleOne}</li>
              <li>{slide.subTitleTow}</li>
            </ul>
            <div className="flex gap-4 mt-10">
              <Button variant="success">{slide.buttonCollection}</Button>
              <Button variant="success">{slide.buttonCard}</Button>
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-10 absolute right-10 top-9/10 ">
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + items.length) % items.length)
          }
          aria-label="اسلاید قبلی"
          className="  cursor-pointer  -translate-y-1/2 z-10 bg-[#C8E6C9]  text-[#1B5E20] w-10 h-10 rounded-full text-2xl"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % items.length)}
          aria-label="اسلاید بعدی"
          className=" cursor-pointer  -translate-y-1/2 z-10 bg-[#C8E6C9] text-[#1B5E20] text-2xl w-10 h-10 rounded-full"
        >
          ›
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              index === current
                ? "bg-[#1B5E20] w-6 duration-700"
                : "bg-white/50"
            }`}
            aria-label={`رفتن به اسلاید ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeBannerSlider;
