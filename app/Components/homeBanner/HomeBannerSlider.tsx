"use client";

import { homeBanner } from "@/app/Type/Type";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  }, [items.length]);
  return (
    <div className="relative flex mx-auto  max-w-275 h-110  overflow-hidden  ">
      {items.map((slide, index) => (
        <div
          key={index}
          className={`absolute   inset-0 transition-opacity duration-700   ${
            index === current ? "opacity-100 " : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt="بنر"
            fill
            className="object-cover rounded-2xl "
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0  bg-linear-to-l  from-black/70 via-black/20 to-transparent"></div>
        </div>
      ))}

      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + items.length) % items.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white w-10 h-10 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % items.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white w-10 h-10 rounded-full"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-[#f74d04] w-6 " : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeBannerSlider;
