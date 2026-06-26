import { ProduvtType } from "./../Type/Type";
import NewShoesSlider from "./NewShoesSlider";
import db from "../../data/db.json";

function NewShoes() {
  const data = db.NewShoe as ProduvtType[];

  return (
    <div className=" ">
      <h1 className="flex justify-center mt-5">کفش های جدید</h1>
      <NewShoesSlider items={data} />
    </div>
  );
}

export default NewShoes;
