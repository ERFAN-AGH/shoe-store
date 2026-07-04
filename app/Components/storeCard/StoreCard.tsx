import { ProductType } from "@/app/Type/Type";
import db from "./../../../data/db.json";
import Image from "next/image";
import Button from "../button/Button";
import Link from "next/link";
function StoreCard() {
  const data = db.allShoes as ProductType[];

  return (
    <div className="h-fit grid grid-cols-4  gap-2">
      {data.map((item) => (
        <div key={item.id} className=" flex justify-center">
          <div className="bg-emerald-100 shadow-md my-3 rounded-2xl w-44 h-64 flex flex-col justify-center items-center">
            <div className=" rounded-2xl">
              <Image
                src={item.image}
                alt="logo"
                className="w-30 mt-2 border-t-red-200 rounded h-32 "
                width={300}
                height={300}
              />
            </div>

            <h4 className="">{item.title}</h4>

            <p>{item.views}</p>
            <Link href={item.href + item.id}>
              <Button variant="success">مشاهده جزئیات</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoreCard;
