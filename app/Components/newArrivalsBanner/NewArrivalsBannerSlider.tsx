"use client";
import { useRef } from "react";
import { ProductType } from "@/app/Type/Type";
import NewArrivalsBannerCard from "./NewArrivalsBannerCard";
import Button from "./../button/Button";

export default function NewArrivalsBannerSlider({
  items,
}: {
  items: ProductType[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <Button
        variant="success"
        onClick={() => scroll("right")}
        className="hidden  md:flex absolute right-5 cursor-pointer top-1/2 -translate-y-1/2 z-10  font-bold w-10 h-10 items-center justify-center rounded-full shadow p-2"
      >
        →
      </Button>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-3 scroll-smooth"
      >
        {items.map((item) => (
          <div key={item.id} className="snap-start shrink-0">
            <NewArrivalsBannerCard {...item} />
          </div>
        ))}
      </div>

      <Button
        variant="success"
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-5 cursor-pointer top-1/2 -translate-y-1/2 z-10 font-bold w-10 h-10 items-center justify-center rounded-full shadow p-2"
      >
        ←
      </Button>
    </div>
  );
}
