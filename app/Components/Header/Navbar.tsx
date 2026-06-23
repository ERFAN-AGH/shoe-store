import Logo from "./../../../public/images/logo/Logo.png";
import Image from "next/image";
import Search from "../search/Search";
import NavList from "./NavList";
import ActionBar from "./ActionBar";

function Navbar() {
  return (
    <div className="flex  justify-between  items-center shadow mb-5 h-15  rounded  ">
      <NavList />

      <Search />

      <ActionBar />
      <Image src={Logo} alt="logo" className="w-30 mt-2" />
    </div>
  );
}

export default Navbar;
