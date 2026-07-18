import Image from "next/image";
import { catrgoryType } from "./../../Type/Type";
import db from "@/data/db.json";

function CategoryGrid() {
  const data = db.category as catrgoryType[];

  return (
    <div className="grid grid-cols-4 grid-rows-2 h-90 gap-4  mx-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative group overflow-hidden  rounded-2xl"
          style={{
            gridColumnStart: item.colStart,
            gridRowStart: item.rowStart,
            gridRowEnd: ` span ${item.rowSpan}`,
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-2xl group-hover:scale-125 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15  to-transparent"></div>

          <div className="absolute bottom-5 right-5 ">
            <h1 className="text-2xl font-bold text-[#FFFFFF]">{item.title}</h1>
            <h3 className="text-sm text-[#F5E7EB]">{item.subTitle}</h3>
          </div>
          <div className="absolute w-1 h-12 bg-[#1B5E20] right-2 bottom-5 "></div>
        </div>
      ))}
    </div>
  );
}

export default CategoryGrid;
