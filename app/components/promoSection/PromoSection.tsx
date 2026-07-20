import { promoSection } from "@/app/Type/Type";
import db from "@/data/db.json";
import PromoSectionCard from "./PromoSectionCard";

function PromoSection() {
  const data = db.promoSection as promoSection[];

  return (
    <div>
      <PromoSectionCard items={data} />
    </div>
  );
}

export default PromoSection;
