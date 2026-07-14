import BrandLogo from "../Components/brandLogo/BrandLogo";
import db from "@/data/db.json";
import { TBrandLogo } from "../Type/Type";

function BrandList() {
  const data = db.logoBrand as TBrandLogo[];

  return (
    <div className="flex bg-[#EEF4E6] gap-5">
      {data.map((item) => (
        <div key={item.id}>
          <BrandLogo
            logoPath={item.logoPath}
            size={item.size}
            color={item.color}
          />
        </div>
      ))}
    </div>
  );
}

export default BrandList;
