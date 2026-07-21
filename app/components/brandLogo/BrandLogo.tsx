import db from "@/data/db.json";
import Icon from "./../icon/Icon";
import BrandSlider from "./BrandSlider";
import { IconType } from "@/app/Type/Type";

function BrandLogo() {
  const data = db.logoBrand as IconType[];

  return (
    <div className=" bg-[#EEF4E6] grid grid-cols-12 my-5 mx-3 rounded-2xl items-center p-3 ">
      <div className="col-span-2 flex justify-center ">
        <Icon
          paths={[
            "M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z",
          ]}
          size={30}
          viewBox="0 0 16 16"
          className="text-[#2E7D32] hover:text-[#1B5E20]"
        />
      </div>
      <div className="flex justify-end ml-10  col-span-10">
        <BrandSlider items={data} />
      </div>
    </div>
  );
}

export default BrandLogo;
