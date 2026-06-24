import Link from "next/link";

const brandProducts: Record<
  string,
  { id: number; name: string; price: number }[]
> = {
  jordan: [
    { id: 1, name: "Air Jordan 1 Low", price: 4500000 },
    { id: 2, name: "Air Jordan 4", price: 6200000 },
  ],
  adidas: [
    { id: 3, name: "Adidas Ultraboost", price: 3800000 },
    { id: 4, name: "Adidas Stan Smith", price: 2900000 },
  ],
  nike: [
    { id: 5, name: "Nike Air Max", price: 4200000 },
    { id: 6, name: "Nike React", price: 3600000 },
  ],
  "new-balance": [
    { id: 7, name: "New Balance 574", price: 3200000 },
    { id: 8, name: "New Balance 990", price: 5100000 },
  ],
  puma: [
    { id: 9, name: "Puma Suede", price: 2800000 },
    { id: 10, name: "Puma RS-X", price: 3400000 },
  ],
  reebok: [
    { id: 11, name: "Reebok Classic", price: 2600000 },
    { id: 12, name: "Reebok Club C", price: 2900000 },
  ],
  columbia: [
    { id: 13, name: "Columbia Trailstorm", price: 4800000 },
    { id: 14, name: "Columbia Facet 75", price: 5500000 },
  ],
  skechers: [
    { id: 15, name: "Skechers Go Walk", price: 2200000 },
    { id: 16, name: "Skechers D'Lites", price: 2700000 },
  ],
  "under-armour": [
    { id: 17, name: "UA HOVR Phantom", price: 4100000 },
    { id: 18, name: "UA Charged Assert", price: 3300000 },
  ],
  "on-running": [
    { id: 19, name: "On Cloud 5", price: 6800000 },
    { id: 20, name: "On Cloudmonster", price: 7200000 },
  ],
  "alexander-mcqueen": [
    { id: 21, name: "McQueen Oversized", price: 18000000 },
    { id: 22, name: "McQueen Larry", price: 16500000 },
  ],
  "louis-vuitton": [
    { id: 23, name: "LV Trainer", price: 32000000 },
    { id: 24, name: "LV Archlight", price: 28000000 },
  ],
};

const brandNames: Record<string, string> = {
  jordan: "جردن",
  adidas: "آدیداس",
  nike: "نایک",
  "new-balance": "نیو بالانس",
  "under-armour": "آندر آرمور",
  skechers: "اسکچرز",
  "on-running": "آن رانینگ",
  "alexander-mcqueen": "الکساندر مک‌کوئین",
  columbia: "کلمبیا",
  "louis-vuitton": "لویی ویتون",
  puma: "پوما",
  reebok: "ریباک",
};

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  const products = brandProducts[brand] || [];
  const brandName = brandNames[brand] || brand;

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="bg-black text-white py-10 text-center">
        <h1 className="text-2xl font-bold">کفش‌های {brandName}</h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {products.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl mb-4">محصولی برای این برند یافت نشد</p>
            <Link href="/" className="text-black underline">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <span className="text-gray-400 text-sm text-center px-2">
                    {product.name}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm mb-2">
                    {product.name}
                  </h3>
                  <p className="text-black font-bold">
                    {product.price.toLocaleString("fa-IR")} تومان
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
