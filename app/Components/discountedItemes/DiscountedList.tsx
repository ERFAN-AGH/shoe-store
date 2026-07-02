import { ProduvtType } from "../../Type/Type";

import db from "../../../data/db.json";

import SectionHeader from "../sectionHeader/SectionHeader";
import ShoesSection from "../shoesSection/ShoesSection";

function DiscountedList() {
  const data = db.discountedList as ProduvtType[];

  return (
    <div className=" mt-5">
      <SectionHeader href="/descount" title="کفش های با تخفیف" />
      <ShoesSection product={data} />
    </div>
  );
}

export default DiscountedList;
