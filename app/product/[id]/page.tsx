import { ProductType } from "@/app/Type/Type";
import db from "@/data/db.json";
import Image from "next/image";

type TProduct = {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
async function ProductId({ params }: TProduct) {
  const { id } = await params;
  const data = db.allShoes.find((item) => item.id == id) as ProductType;
  if (!data) return <div>محصول پیدا نشد</div>;
  return (
    <div>
      <Image src={data.image} alt={data.title} width={100} height={100} />
      <h3>{data.title}</h3>
    </div>
  );
}

export default ProductId;
