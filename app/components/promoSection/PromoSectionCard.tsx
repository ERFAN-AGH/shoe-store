import { promoSection } from "@/app/Type/Type";
import Image from "next/image";
import Button from "../button/Button";

type PromoSectionCardProps = {
  items: promoSection[];
};

function PromoSectionCard({ items }: PromoSectionCardProps) {
  return (
    <div className="flex gap-4 m-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group flex-1 h-64 rounded-xl overflow-hidden"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/25 flex gap-2 flex-col justify-center p-6 text-white">
            <span className="text-sm">{item.category}</span>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-sm">{item.subTitle}</p>
            <div className="w-1 h-20 bg-[#1B5E20] absolute right-3 bottom-22"></div>
          </div>

          <Button variant="success" className="w-fit absolute bottom-5 right-4">
            {item.buttonTitle}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default PromoSectionCard;
