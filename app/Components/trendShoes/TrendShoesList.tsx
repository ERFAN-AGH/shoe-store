import db from "../../../data/db.json";
import { ProduvtType } from "../../Type/Type";
import SectionHeader from "../sectionHeader/SectionHeader";
import ShoesSection from "../shoesSection/ShoesSection";
function TrendShoesList() {
  const data = db.trendShoes as ProduvtType[];
  return (
    <div className="mt-5">
      <SectionHeader href="/trendShoes" title="کفش های ترند" />

      <ShoesSection product={data} />
    </div>
  );
}

export default TrendShoesList;
