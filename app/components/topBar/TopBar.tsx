import Link from "next/link";
import db from "@/data/db.json";
import { topBarInfoItemsType, TopBarLinkType } from "@/app/Type/Type";
import Icon from "../icon/Icon";

function TopBar() {
  const topBarRightLinks = db.topBarRightLinks as TopBarLinkType[];
  const topBarInfoItems = db.topBarInfoItems as topBarInfoItemsType[];

  return (
    <div className=" h-10 bg-[#1B5E20] text-[#FFFFFF]  flex justify-between items-center text-[12px] px-5">
      <div className="flex gap-5 ">
        {topBarRightLinks.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex gap-1 group hover:text-[#C8E6C9]"
          >
            <h6> {item.title}</h6>
            <Icon
              paths={[item.icon]}
              size={16}
              className="group-hover:text-[#C8E6C9] text-[#E8F5E9]"
              viewBox={item.viewBox}
            />
          </Link>
        ))}
      </div>
      <div className="flex gap-5">
        {topBarInfoItems.map((item) => (
          <div key={item.id} className="flex gap-1">
            <h6>{item.title}</h6>
            <Icon
              paths={[item.icon]}
              size={16}
              className="text-[#E8F5E9] "
              viewBox={item.viewBox}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
