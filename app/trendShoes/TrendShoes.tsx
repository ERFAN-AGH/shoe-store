import db from "../../data/db.json";
import { ProduvtType } from "./../Type/Type";
import TrendShoesSlider from "./TrendShoesSlider";
function TrendShoes() {
  const data = db.NewShoe as ProduvtType[];
  return (
    <div>
      <h2>کفش های ترند</h2>
      <TrendShoesSlider items={data} />
    </div>
  );
}

export default TrendShoes;
