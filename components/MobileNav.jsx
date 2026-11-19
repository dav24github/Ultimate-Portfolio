"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { localePath, samePath, useLang } from "@/lib/i18n";

const MobileNav = () => {
  const { lang, t, pathname } = useLang();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={localePath(lang, "/")}>
            <h1 className="text-4xl font-semibold">
              Davs<span className="text-accent">.Hub</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {t.nav.map((link, index) => {
            return (
              <Link
                href={localePath(lang, link.path)}
                key={index}
                className={`${
                  samePath(localePath(lang, link.path), pathname) &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
