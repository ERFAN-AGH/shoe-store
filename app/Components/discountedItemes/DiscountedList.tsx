import { ProduvtType } from "../../Type/Type";

import db from "../../../data/db.json";
import Link from "next/link";
import DiscountedSlider from "./DiscountedSlider";
import SectionHeader from "../sectionHeader/SectionHeader";

function DiscountedList() {
  const data = db.NewShoe as ProduvtType[];

  return (
    <div className=" mt-5">
      <SectionHeader href="/descount" title="کفش های با تخفیف" />
      <DiscountedSlider items={data} />
    </div>
  );
}

export default DiscountedList;
