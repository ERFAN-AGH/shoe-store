import { ProduvtType } from "../Type/Type";
import NewShoesSlider from "./NewShoesSlider";

async function NewShoes() {
  const result = await fetch("http://localhost:8000/NewShoe");
  const data = (await result.json()) as ProduvtType[];

  return (
    <div className="">
      <h1 className="flex justify-center mt-5">کفش های جدید</h1>
      <NewShoesSlider items={data} />
    </div>
  );
}

export default NewShoes;
