import db from "../../data/db.json";
import { ProduvtType } from "./../Type/Type";
import BestSellingsShoesSlider from "./BestSellingsShoesSlider";

function BestSellingsShoes() {
  const data = db.NewShoe as ProduvtType[];
  return (
    <div>
      <h2>کفش های پر فروش</h2>
      <BestSellingsShoesSlider items={data} />
    </div>
  );
}

export default BestSellingsShoes;
