"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { ProduvtType } from "../../Type/Type";
import DiscountedCard from "./DiscountedCard";

interface SliderProps {
  items: ProduvtType[];
}
export default function DiscountedSlider({ items }: SliderProps) {
  const [current, setCurrent] = useState(0);
  const visibleCount = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (items.length - visibleCount + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const visibleItems = items.slice(current, current + visibleCount);

  return (
    <div className="w-full px-4 flex justify-center">
      <div className="grid grid-cols-5 gap-20  transition-all duration-500">
        {visibleItems.map((item) => (
          <Link key={item.id} href={"/newShoes/" + item.id}>
            <DiscountedCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
