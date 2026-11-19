"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { switchLangPath, useLang } from "@/lib/i18n";

// "ES | EN": goes to the same page in the other language.
const LangSwitch = ({ className }) => {
  const { lang, pathname } = useLang();
  const other = switchLangPath(pathname);
  const item = (code) =>
    code === lang ? (
      <span className="text-accent">{code.toUpperCase()}</span>
    ) : (
      <Link
        href={other}
        hrefLang={code}
        className="text-white/60 hover:text-accent transition-all"
      >
        {code.toUpperCase()}
      </Link>
    );
  return (
    <div className={cn("flex items-center gap-2 font-medium", className)}>
      {item("es")}
      <span className="text-white/30">|</span>
      {item("en")}
    </div>
  );
};

export default LangSwitch;
