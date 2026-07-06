"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavList() {
  const Pathname = usePathname();
  const NavList = [
    {
      title: "کفش  استور",
      href: "/",
      id: 1,
    },
    {
      title: "محصولات ",
      href: "/store",
      id: 2,
    },

    {
      title: " دانستنی های کفش  ",
      href: "/aboutShoes",
      id: 4,
    },
    {
      title: "  درباره فروشگاه ",
      href: "/aboutStore",
      id: 5,
    },
    {
      title: "ارتباط با ما ",
      href: "/contactUs",
      id: 6,
    },
  ];
  return (
    <div className="">
      <ul>
        <li>
          {NavList.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={item.href === Pathname ? "text-sky-400" : "text-black"}
              style={{ marginRight: "15px" }}
            >
              {item.title}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default NavList;
