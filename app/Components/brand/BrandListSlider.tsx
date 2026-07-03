"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ProductType } from "../../Type/Type";
import BrandCard from "./BrandCard";

interface SliderProps {
  product: ProductType[];
}
export default function BrandListSlider({ product }: SliderProps) {
  const [current, setCurrent] = useState(0);
  const visibleCount = 5;

  useEffect(() => {
    if (product.length <= visibleCount) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (product.length - visibleCount + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [product.length]);

  const visibleItems = product.slice(current, current + visibleCount);

  return (
    <div className="w-full px-4 flex justify-center">
      <div className="grid grid-cols-5 gap-20  transition-all duration-700">
        {visibleItems.map((item) => (
          <Link key={item.id} href={item.href + item.id}>
            <BrandCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
