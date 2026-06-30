import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import db from "./../../../data/db.json";
import SectionHeader from "../sectionHeader/SectionHeader";

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
      <SectionHeader title=" دسته بندی " href="/category" />

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
