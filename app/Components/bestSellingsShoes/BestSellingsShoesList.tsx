import db from "../../../data/db.json";
import { ProduvtType } from "../../Type/Type";
import SectionHeader from "../sectionHeader/SectionHeader";
import ShoesSection from "../shoesSection/ShoesSection";

function BestSellingsShoesList() {
  const data = db.bestSellingsShoesList as ProduvtType[];
  return (
    <div>
      <SectionHeader href="/bestSellingsShoes" title="کفش های پرفروش" />
      <ShoesSection product={data} />
    </div>
  );
}

export default BestSellingsShoesList;
