import SectionTitle from "../sectionTitle/SectionTitle";
import db from "@/data/db.json";
import Icon from "../icon/Icon";
import { PopularCategoryesType } from "@/app/Type/Type";
function PopularCategoryes() {
  const data = db.PopularCategoryes as PopularCategoryesType[];
  return (
    <div>
      <SectionTitle title="دسته بندی محبوب" />
      <div className="flex justify-around my-4 text-[#1B5E20] ">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-[#f0f0ef] items-center justify-centers flex flex-col gap-4 p-4 rounded-2xl"
          >
            <Icon paths={item.paths} size={60} viewBox={item.viewBox} />
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategoryes;
