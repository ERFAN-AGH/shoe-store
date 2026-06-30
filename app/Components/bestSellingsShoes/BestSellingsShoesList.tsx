import Link from "next/link";
import db from "../../../data/db.json";
import { ProduvtType } from "../../Type/Type";
import BestSellingsShoesSlider from "./BestSellingsShoesSlider";
import SectionHeader from "../sectionHeader/SectionHeader";

function BestSellingsShoesList() {
  const data = db.NewShoe as ProduvtType[];
  return (
    <div>
      <SectionHeader href="/bestSellingsShoes" title="کفش های پرفروش" />
      <BestSellingsShoesSlider items={data} />
    </div>
  );
}

export default BestSellingsShoesList;
