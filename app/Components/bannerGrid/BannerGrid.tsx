"use client";
import db from "./../../../data/db.json";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type TBrandItem = {
  id: number;
  name: string;
  logo: string;
  href: string;
};

export default function BrandGrid() {
  const data = db.brands as TBrandItem[];
  const [activeGroup, setActiveGroup] = useState(0);
  const groupSize = 4;
  const groups = Array.from(
    { length: Math.ceil(data.length / groupSize) },
    (_, i) => data.slice(i * groupSize, i * groupSize + groupSize),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGroup((prev) => (prev + 1) % groups.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white   ">
      <h2 className="text-center text-gray-500 text-sm my-5 tracking-widest uppercase">
        برند ها
      </h2>

      <div className="relative  overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${activeGroup * 100}%)` }}
        >
          {groups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="min-w-full grid grid-cols-4 gap-3 justify-items-center px-8"
            >
              {group.map((brand) => (
                <Link href={brand.href} key={brand.id}>
                  <div className="flex items-center justify-center bg-emerald-100 p-3 w-20 h-20  rounded-2xl   cursor-pointer hover:scale-105 transition-transform duration-200">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={200}
                      height={200}
                      className="object-cover rounded-2xl  invert w-12 h-12 "
                    />
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {groups.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveGroup(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeGroup === index ? "bg-gray-800 w-5" : "bg-gray-300"
            }`}
            aria-label={`گروه ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
