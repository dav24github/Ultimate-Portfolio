"use client";

import { usePathname } from "next/navigation";
import es from "@/content/es";
import en from "@/content/en";

const contents = { es, en };

// Spanish lives at the root ("/work/"), English under "/en" ("/en/work/").
export const getLang = (pathname = "") =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";

export const getContent = (lang) => contents[lang] ?? es;

// "/work/" -> "/en/work/" for English; unchanged for Spanish.
export const localePath = (lang, path) =>
  lang === "en" ? `/en${path === "/" ? "/" : path}` : path;

// Same page in the other language.
export const switchLangPath = (pathname = "/") => {
  if (getLang(pathname) === "en") {
    const rest = pathname.replace(/^\/en/, "");
    return rest === "" ? "/" : rest;
  }
  return `/en${pathname === "/" ? "/" : pathname}`;
};

// Compares paths ignoring the trailing slash.
export const samePath = (a = "", b = "") =>
  a.replace(/\/$/, "") === b.replace(/\/$/, "");

export const useLang = () => {
  const pathname = usePathname();
  const lang = getLang(pathname);
  return { lang, t: getContent(lang), pathname };
};
