import db from "./../../../data/db.json";
import { ProductType } from "@/app/Type/Type";
import BrandListSlider from "./BrandListSlider";
import SectionHeader from "../sectionHeader/SectionHeader";

async function BrandList() {
  const uniqueBrands = Array.from(
    new Map(db.allShoes.map((item) => [item.name, item])).values(),
  ) as ProductType[];
  return (
    <div>
      <SectionHeader href="/brandShoes" title="برند ها" />
      <BrandListSlider product={uniqueBrands} />
    </div>
  );
}

export default BrandList;
