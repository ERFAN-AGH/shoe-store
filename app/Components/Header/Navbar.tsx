import Logo from "./../../imgs/logo/Logo.png";
import Image from "next/image";
import Search from "../search/Search";
import NavList from "./NavList";
import ActionBar from "./ActionBar";

function Navbar() {
  return (
    <div className="flex flex-row-reverse justify-between  items-center bg-gray-300 h-15  rounded mt-15 ">
      <NavList />

      <Search />

      <ActionBar />
      <Image src={Logo} alt="logo" className="w-30 mt-2" />
    </div>
  );
}

export default Navbar;
