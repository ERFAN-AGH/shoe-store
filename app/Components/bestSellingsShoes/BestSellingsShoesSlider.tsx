"use client";

import { useEffect, useState } from "react";
import { ProduvtType } from "../../Type/Type";
import Link from "next/link";
import BestSellingsShoesCard from "./BestSellingsShoesCard";
type TTrendShoesSlider = {
  items: ProduvtType[];
};

function BestSellingsShoesSlider({ items }: TTrendShoesSlider) {
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
          <Link key={item.id} href={"/bestSellingsShoes/" + item.id}>
            <BestSellingsShoesCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BestSellingsShoesSlider;
