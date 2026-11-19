"use client";

import { localePath, samePath, useLang } from "@/lib/i18n";
import Link from "next/link";

const Nav = () => {
  const { lang, t, pathname } = useLang();
  return (
    <nav className="flex gap-8">
      {t.nav.map((link, index) => {
        return (
          <Link
            href={localePath(lang, link.path)}
            key={index}
            className={`${
              samePath(localePath(lang, link.path), pathname) && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
