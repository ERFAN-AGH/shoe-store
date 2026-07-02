import db from "../../../data/db.json";
import { ProductType } from "../../Type/Type";

import SectionHeader from "../sectionHeader/SectionHeader";
import ShoesSection from "../shoesSection/ShoesSection";

function SingleSizeList() {
  const data = db.allShoes.filter((item) => item.isSingleSize) as ProductType[];
  return (
    <div className="mt-5">
      <SectionHeader href="/singleSize" title="کفش های تک سایز" />
      <ShoesSection product={data} />
    </div>
  );
}

export default SingleSizeList;
