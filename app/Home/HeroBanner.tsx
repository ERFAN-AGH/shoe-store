"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import MenShoe from "./../../public/images/HeroSection/MenShoe.jpg";
import WomenShoe from "./../../public/images/HeroSection/WomenShoe.jpg";

const slides = [
  { src: "/images/HeroSection/banner1.jpg", alt: "بنر اول" },
  { src: "/images/HeroSection/banner2.jpg", alt: "بنر دوم" },
  { src: "/images/HeroSection/banner3.jpg", alt: "بنر سوم" },
  { src: "/images/HeroSection/banner4.jpg", alt: "بنر چهارم" },
  { src: "/images/HeroSection/banner5.jpg", alt: "بنر پنجم" },
];

function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="grid grid-cols-12 gap-4 mx-5">
      <div className="col-span-8">
        <div className="relative rounded h-100 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}

          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="hover:bg-white hover:text-black absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white w-10 h-10 rounded-full text-xl"
          >
            &lsaquo;
          </button>

          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="hover:bg-white hover:text-black absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white w-10 h-10 rounded-full text-xl"
          >
            &rsaquo;
          </button>

          <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-4  rounded ">
        <div>
          <Image
            src={MenShoe}
            alt="MenShoe "
            className="mb-3 rounded-2xl h-48 "
          />
        </div>
        <div>
          <Image src={WomenShoe} alt="WomenShoe" className="rounded-2xl h-48" />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
