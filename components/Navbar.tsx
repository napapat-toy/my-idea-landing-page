"use client";

import { navLinks } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed z-50 bg-slate-900 w-full flex justify-between items-center">
      <h2 className="text-white text-3xl px-8 cursor-default ">My IDEA</h2>
      <div className="flex gap-4 px-8">
        {navLinks.map(({ link, label }) => {
          console.log(pathname);
          const active = pathname === link
          return (
            <Link
              key={label}
              href={link}
              className={`text-white p-3 border-b-2 hover:border-yellow-200 hover:bg-slate-800 transition capitalize ${
                active && "bg-slate-700"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
