import { ProduvtType } from "../../Type/Type";
import db from "../../../data/db.json";
import SectionHeader from "../sectionHeader/SectionHeader";
import ShoesSection from "../shoesSection/ShoesSection";

function NewShoesList() {
  const data = db.NewShoe as ProduvtType[];

  return (
    <div className=" mt-5">
      <SectionHeader title="  کفش های جدید " href="/newShoes" />
      <ShoesSection product={data} />
    </div>
  );
}

export default NewShoesList;
