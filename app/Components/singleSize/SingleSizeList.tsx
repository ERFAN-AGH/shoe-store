import db from "../../../data/db.json";
import { ProduvtType } from "../../Type/Type";

import SectionHeader from "../sectionHeader/SectionHeader";
import ShoesSection from "../shoesSection/ShoesSection";

async function SingleSizeList() {
  const data = (await db.singleSizeList) as ProduvtType[];
  return (
    <div className="mt-5">
      <SectionHeader href="/singleSize" title="کفش های تک سایز" />
      <ShoesSection product={data} />
    </div>
  );
}

export default SingleSizeList;
