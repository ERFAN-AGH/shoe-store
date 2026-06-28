import Image from "next/image";
import db from "./../../../data/db.json";
type ArticelProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
async function BestSellingsShoesId({ params }: ArticelProps) {
  const { id } = await params;
  const data = db.NewShoe.find((item) => item.id == id);
  if (!data) return <div>محصول پیدا نشد</div>;
  return (
    <div>
      <Image
        src={data.image}
        alt="logo"
        className="w-30 mt-2"
        width={300}
        height={300}
      />
      <h1>{data.title}</h1>
      <p>{data.views}</p>
    </div>
  );
}

export default BestSellingsShoesId;
