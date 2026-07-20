import { topBarInfoItemsType } from "@/app/Type/Type";
import db from "@/data/db.json";
import Icon from "../icon/Icon";

function TrustBadges() {
  const data = db.topBarInfoItems as topBarInfoItemsType[];
  return (
    <div className="flex rounded-2xl  bg-[#EEF4E6] px-5 mx-5 justify-around h-20">
      {data.map((item) => (
        <div key={item.id} className="flex gap-3 items-center  text-[#1B5E20]">
          <Icon path={item.icon} size={30} />
          <div>
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className="text-sm">{item.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrustBadges;
