import { ProduvtType } from "../../Type/Type";
import NewShoesSlider from "./NewShoesSlider";
import db from "../../../data/db.json";
import Link from "next/link";
import SectionHeader from "../sectionHeader/SectionHeader";

function NewShoesList() {
  const data = db.NewShoe as ProduvtType[];

  return (
    <div className=" mt-5">
      <SectionHeader title="  کفش های جدید " href="/newShoes" />
      <NewShoesSlider items={data} />
    </div>
  );
}

export default NewShoesList;
