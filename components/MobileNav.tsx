import { navLinks } from "@/lib/data";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  return (
    <div className="md:hidden fixed z-50 bg-slate-900 w-full flex justify-between items-center">
      <h2 className="text-white text-3xl px-8 cursor-default ">My IDEA</h2>

      <Sheet>
        <SheetTrigger asChild>
          <div className="px-4">
            <div className="bg-white rounded-md">
              <MenuIcon />
            </div>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>My IDEA</SheetTitle>
            <div className="divide-y divide-slate-300 divide-opacity-30">
              {navLinks.map(({ link, label }) => {
                return (
                  <SheetDescription key={label}>
                    <SheetClose asChild>
                      <Link
                        href={link}
                        className={`text-white text-2xl transition capitalize`}
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  </SheetDescription>
                );
              })}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
