"use clinet";
import Image from "next/image";
import db from "./../../../data/db.json";
import Button from "../button/Button";
import Link from "next/link";
interface THomeBannerLink {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

async function HomeBannerLink() {
  const data = (await db.homeBannerLink) as THomeBannerLink[];
  return (
    <div className="  h-full  grid  gap-5 ml-5">
      {data.map((item) => (
        <div key={item.id} className="  relative ">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="rounded-2xl object-cover "
          />
          <div className=" absolute bottom-5 right-5">
            <div className="w-1 h-12 absolute bg-white top-0 -right-2"></div>
            <h3 className="text-2xl text-white font-bold">{item.title}</h3>
            <p className="text-white">{item.subtitle}</p>
            <Link href={item.href}>
              <Button variant="success"> مشاهده محصولات </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeBannerLink;
