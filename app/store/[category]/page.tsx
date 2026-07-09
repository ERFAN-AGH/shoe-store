import { ProductType } from "@/app/Type/Type";
import db from "@/data/db.json";
import Image from "next/image";
import Link from "next/link";
type TFeatures = {
  params: Promise<{ category: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
async function StoreCategory({ params }: TFeatures) {
  const { category } = await params;
  const data = db.allShoes.filter(
    (item) => item.category == category,
  ) as ProductType[];
  if (!data) return <div>محصول پیدا نشد</div>;
  return (
    <div>
      {data.map((item) => (
        <Link key={item.id} href={`/product/${item.id}`}>
          <div>
            <Image src={item.image} alt={item.title} width={50} height={50} />
            <h3>{item.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default StoreCategory;
