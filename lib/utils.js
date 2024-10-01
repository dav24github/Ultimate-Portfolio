import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const links = [
  {
    name: "home",
    label: "Inicio",
    path: "/",
  },
  {
    name: "services",
    label: "Servicios",
    path: "/services",
  },
  {
    name: "resume",
    label: "CV",
    path: "/resume",
  },
  {
    name: "work",
    label: "Portafolio",
    path: "/work",
  },
  {
    name: "contact",
    label: "Contacto",
    path: "/contact",
  },
];
