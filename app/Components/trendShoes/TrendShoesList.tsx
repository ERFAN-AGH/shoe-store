import Link from "next/link";
import db from "../../../data/db.json";
import { ProduvtType } from "../../Type/Type";
import TrendShoesSlider from "./TrendShoesSlider";
import SectionHeader from "../sectionHeader/SectionHeader";
function TrendShoesList() {
  const data = db.NewShoe as ProduvtType[];
  return (
    <div className="mt-5">
      <SectionHeader href="/trendShoes" title="کفش های ترند" />
      <TrendShoesSlider items={data} />
    </div>
  );
}

export default TrendShoesList;
