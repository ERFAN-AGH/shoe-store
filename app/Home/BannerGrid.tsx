"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    id: 1,
    name: "Jordan",
    logo: "/images/brands/jordan.png",
    href: "/brandShoes/jordan",
  },
  {
    id: 2,
    name: "Adidas",
    logo: "/images/brands/adidas.png",
    href: "/brandShoes/adidas",
  },
  {
    id: 3,
    name: "Nike",
    logo: "/images/brands/nike.png",
    href: "/brandShoes/nike",
  },
  {
    id: 4,
    name: "New Balance",
    logo: "/images/brands/new-balance.png",
    href: "/brandShoes/newBalance",
  },
  {
    id: 5,
    name: "Under Armour",
    logo: "/images/brands/under-armour.png",
    href: "/brandShoes/underArmour",
  },
  {
    id: 6,
    name: "Skechers",
    logo: "/images/brands/skechers.png",
    href: "/brandShoes/skechers",
  },
  {
    id: 7,
    name: "On Running",
    logo: "/images/brands/on-running.png",
    href: "/brandShoes/onRunning",
  },
  {
    id: 8,
    name: "Alexander McQueen",
    logo: "/images/brands/alexander-mcqueen.png",
    href: "/brandShoes/alexanderMcQueen",
  },
  {
    id: 9,
    name: "Columbia",
    logo: "/images/brands/columbia.png",
    href: "/brandShoes/columbia",
  },
  {
    id: 10,
    name: "Louis Vuitton",
    logo: "/images/brands/louis-vuitton.png",
    href: "/brandShoes/louisVuitton",
  },
  { id: 11, name: "Puma", logo: "/images/brands/puma.png", href: "/puma" },
  {
    id: 12,
    name: "Reebok",
    logo: "/images/brands/reebok.png",
    href: "/brandShoes/reebok",
  },
];

const groupSize = 4;
const groups = Array.from(
  { length: Math.ceil(brands.length / groupSize) },
  (_, i) => brands.slice(i * groupSize, i * groupSize + groupSize),
);

export default function BrandGrid() {
  const [activeGroup, setActiveGroup] = useState(0);

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

      <div className="relative overflow-hidden">
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
                  <div className="flex items-center justify-center bg-black p-3 w-20 h-20  rounded-2xl   cursor-pointer hover:scale-105 transition-transform duration-200">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={60}
                      height={60}
                      className="object-contain invert w-12 h-12 "
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
