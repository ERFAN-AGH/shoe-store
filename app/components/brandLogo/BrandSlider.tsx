import { IconType } from "@/app/Type/Type";

import Icon from "../icon/Icon";

type BrandSliderProps = {
  items: IconType[];
};

function BrandSlider({ items }: BrandSliderProps) {
  const loopItems = [...items, ...items];

  return (
    <div className="overflow-hidden w-full" dir="ltr">
      <div className="flex w-max animate-brand-scroll">
        {loopItems.map((item, i) => (
          <div
            className="mr-16 shrink-0 text-[#355E3B]"
            key={`${item.id}-${i}`}
          >
            <Icon {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandSlider;
