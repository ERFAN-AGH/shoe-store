import { TBrandLogo } from "@/app/Type/Type";
import BrandLogo from "./BrandLogo";

type BrandSliderProps = {
  items: TBrandLogo[];
};

function BrandSlider({ items }: BrandSliderProps) {
  const loopItems = [...items, ...items]; // فقط ۲ بار، نه بیشتر

  return (
    <div className="overflow-hidden w-full" dir="ltr">
      <div className="flex w-max animate-brand-scroll">
        {loopItems.map((item, i) => (
          <div className="mr-16 shrink-0" key={`${item.id}-${i}`}>
            <BrandLogo {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandSlider;
