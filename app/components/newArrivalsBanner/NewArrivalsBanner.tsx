import { ProductType } from "@/app/Type/Type";
import db from "@/data/db.json";

import NewArrivalsBannerSlider from "./NewArrivalsBannerSlider";
import SectionTitle from "../sectionTitle/SectionTitle";

function NewArrivalsBanner() {
  const data = db.allShoes.filter((item) => item.isNew) as ProductType[];

  return (
    <div>
      <SectionTitle title="جدیدترین " href="" />
      <div className="max-w-312 rounded-2xl">
        <NewArrivalsBannerSlider items={data} />
      </div>
    </div>
  );
}

export default NewArrivalsBanner;
