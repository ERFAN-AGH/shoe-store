import { TActionBarIcons } from "@/app/Type/Type";
import db from "@/data/db.json";
import Icon from "../icon/Icon";
import Link from "next/link";

function ActionBar() {
  const actionBarIcons = db.actionBarIcons as TActionBarIcons[];
  return (
    <div className="flex gap-3 text-[#373951] ">
      <div className="flex items-center  bg-[#F5F9F3] border border-[#DDE8D9]  focus-within:border-[#6B9B5E] rounded-2xl px-2 py-1">
        <input
          type="search"
          placeholder="جستوجو محصولات "
          dir="rtl"
          className="text-sm  placeholder-[#9CA3AF] text-[#374151] outline-none"
        />
        <Icon
          path="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
          size={20}
          className="hover:text-[#C8E6C9]"
        />
      </div>
      <div className="flex items-center gap-3 ">
        {actionBarIcons.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="hover:text-[#C8E6C9] transition-all hover:-translate-y-1 duration-300"
          >
            <Icon path={item.path} size={24} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ActionBar;
