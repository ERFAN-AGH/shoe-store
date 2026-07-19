"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import db from "@/data/db.json";
import { navBarlinkList } from "@/app/Type/Type";

function NavList() {
  const navLinks = db.navBarLinkList as navBarlinkList[];
  const pathname = usePathname();
  return (
    <div>
      <ul>
        <li className="flex gap-3 items-center">
          {navLinks.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={
                item.href === pathname ? "text-[#8dcb8f]" : "text-[#374151]"
              }
            >
              <span className=" hover:text-[#2E7D32]">{item.title}</span>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default NavList;
