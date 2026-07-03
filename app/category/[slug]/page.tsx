import Image from "next/image";
import db from "./../../../data/db.json";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const shoes = db.allShoes.filter((item) => item.category === slug);

  if (shoes.length === 0) return <div>محصولی پیدا نشد</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {shoes.map((shoe) => (
        <div key={shoe.id}>
          <Image src={shoe.image} alt={shoe.title} width={300} height={300} />
          <h2>{shoe.title}</h2>
          <p>{shoe.views}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryPage;
