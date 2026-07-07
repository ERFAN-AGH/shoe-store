import Image from "next/image";
import { ProductType } from "@/app/Type/Type";
import Button from "../button/Button";

function ShoesSectionCard({ image, title, views }: ProductType) {
  return (
    <div>
      <div className="bg-gray-50 shadow my-3 rounded-2xl w-44 h-64 flex flex-col justify-center items-center">
        <div className=" rounded-2xl">
          <Image
            src={image}
            alt="logo"
            className="w-30 mt-2 border-t-red-200 rounded h-32 "
            width={300}
            height={300}
          />
        </div>

        <h4 className="">{title}</h4>

        <p>{views}</p>
        <Button variant="success">مشاهده جزئیات</Button>
      </div>
    </div>
  );
}

export default ShoesSectionCard;
