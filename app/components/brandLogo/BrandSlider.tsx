import { TBrandLogo } from "@/app/Type/Type";

import BrandCard from "./BrandCard";

type BrandSliderProps = {
  items: TBrandLogo[];
};

function BrandSlider({ items }: BrandSliderProps) {
  const loopItems = [...items, ...items];

  return (
    <div className="overflow-hidden w-full" dir="ltr">
      <div className="flex w-max animate-brand-scroll">
        {loopItems.map((item, i) => (
          <div className="mr-16 shrink-0" key={`${item.id}-${i}`}>
            <BrandCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandSlider;
