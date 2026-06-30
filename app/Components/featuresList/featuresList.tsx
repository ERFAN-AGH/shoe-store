"use client";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import db from "../../../data/db.json";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../sectionHeader/SectionHeader";
type TheroBanner = {
  id: string;
  image: string;
  title: string;
  description: string;
  feature: string;
};

function FeaturesList() {
  const data = db.heroBanner as TheroBanner[];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <SectionHeader href="/features" title="امکانات فروشگاه" />
      <div className="flex mx-5 rounded h-100 relative overflow-hidden ">
        {data.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700  ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="heroBanner"
              fill
              className="object-cover"
            />
            <div className=" absolute bottom-13 right-5">
              <div className="w-1 h-12 bg-white absolute -right-2 top-0"></div>
              <h3 className="font-bold text-2xl text-white">{slide.title}</h3>
              <p className="font-bold  text-white">{slide.description}</p>
              <Link href={`/features/${slide.feature}`}>
                <Button variant="success" className="flex items-center mt-5">
                  <p>برو به صفحه</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left-circle-fill text-emerald-900 hover:text-emerald-500 transition-all duration-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                  </svg>
                </Button>
              </Link>
            </div>
            <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current
                      ? "bg-emerald-200 scale-125"
                      : "bg-blue-100"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesList;
