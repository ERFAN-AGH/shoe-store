import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import db from "./../../../data/db.json";

export interface TCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  colSpan: number;
  rowSpan: number;
  rowStart: number;
  colStart: number;
}

async function CategoryList() {
  const data = (await db.category) as TCategory[];

  return (
    <div>
      <div className="flex items-center justify-between gap-2 mx-5 my-5">
        <h2 className="text-xl font-bold text-emerald-600">دسته بندی</h2>
        <div className="h-0.5  bg-gray-200 flex-1"></div>
        <Link href="/category" className="flex items-center">
          <p>مشاهده همه</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill text-emerald-300 hover:text-emerald-500 transition-all duration-300"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-12 grid-rows-2 gap-5 mx-5 h-125 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-full flex items-center flex-col rounded-2xl group overflow-hidden"
            style={{
              gridColumn: ` ${item.colStart} / span ${item.colSpan}`,
              gridRow: ` ${item.rowStart} / span ${item.rowSpan}`,
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />

            <div className="absolute bottom-12 right-4 text-right">
              <div className="w-1 bg-white h-12 absolute -right-2 top-0"></div>
              <h3 className="text-white font-black text-xl">{item.title}</h3>
              <p className="text-white text-sm">{item.subtitle}</p>
            </div>

            <Link
              href={item.href}
              className="absolute  -bottom-15  group-hover:bottom-3 transition-all duration-300"
            >
              <Button variant="success">مشاهده محصولات</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
