import { ProductType } from "../../Type/Type";

import db from "../../../data/db.json";

import SectionHeader from "../sectionHeader/SectionHeader";
import ShoesSection from "../shoesSection/ShoesSection";

function DiscountedList() {
  const data = db.allShoes.filter((item) => item.isDiscounted) as ProductType[];

  return (
    <div className=" mt-5">
      <SectionHeader href="/descount" title="کفش های با تخفیف" />
      <ShoesSection product={data} />
    </div>
  );
}

export default DiscountedList;
