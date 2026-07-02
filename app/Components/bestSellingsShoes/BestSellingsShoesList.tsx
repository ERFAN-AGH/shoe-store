import db from "../../../data/db.json";
import { ProductType } from "../../Type/Type";
import SectionHeader from "../sectionHeader/SectionHeader";
import ShoesSection from "../shoesSection/ShoesSection";

function BestSellingsShoesList() {
  const data = db.allShoes.filter(
    (item) => item.isBestSelling,
  ) as ProductType[];
  return (
    <div>
      <SectionHeader href="/bestSellingsShoes" title="کفش های پرفروش" />
      <ShoesSection product={data} />
    </div>
  );
}

export default BestSellingsShoesList;
