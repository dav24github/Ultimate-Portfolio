"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { localePath, useLang } from "@/lib/i18n";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LangSwitch from "./LangSwitch";

const Header = () => {
  const { lang, t } = useLang();
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={localePath(lang, "/")}>
          <h2 className="text-4xl font-semibold">
            Dav&apos;s<span className="text-accent">.Hub</span>
          </h2>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={localePath(lang, "/contact/")}>
            <Button>{t.contactMe}</Button>
          </Link>
          <LangSwitch />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden flex items-center gap-6">
          <LangSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
