import NavList from "./NavList";
import ActionBar from "./ActionBar";
import Icon from "../icon/Icon";

function Navbar() {
  return (
    <div className="flex  justify-between px-5 bg-[#FFFFFF]   items-center shadow  h-16  rounded  ">
      <h1 className="text-xl font-bold flex">
        <span className="text-[#374151]">کفش </span>
        <span className="text-[#2E7D32]">ورزشی</span>
        <Icon
          path="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"
          size={20}
          className="text-[#2E7D32]"
        />
      </h1>
      <NavList />

      <ActionBar />
    </div>
  );
}

export default Navbar;
