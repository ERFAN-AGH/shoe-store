import db from "../../../data/db.json";
import { ProduvtType } from "../../Type/Type";
import SingleSizeSilder from "./SingleSizeSilder";
import SectionHeader from "../sectionHeader/SectionHeader";

async function SingleSizeList() {
  const data = (await db.NewShoe) as ProduvtType[];
  return (
    <div className="mt-5">
      <SectionHeader href="/singleSize" title="کفش های تک سایز" />
      <SingleSizeSilder items={data} />
    </div>
  );
}

export default SingleSizeList;
