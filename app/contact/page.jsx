"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const info = [
  {
    icon: <FaWhatsapp />,
    title: "Teléfono",
    description: "(+591) 72874083",
  },
  {
    icon: <FaEnvelope />,
    title: "Correo",
    description: "info@davidescalante.es",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Ubicación",
    description: "Sucre, Bolivia",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Ponte en contacto</h3>
              <p className="text-white/60">
                Si tienes alguna pregunta o simplemente quieres saludar, ¡haré
                todo lo posible por responderte!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Nombre" />
                <Input type="lastname" placeholder="Apellido" />
                <Input type="email" placeholder="Correo electrónico" />
                <Input type="phone" placeholder="Número de teléfono" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Desarrollo Web</SelectItem>
                    <SelectItem value="2">Diseño UI/UX</SelectItem>
                    <SelectItem value="3">SEO</SelectItem>
                    <SelectItem value="4">Desarrollo Móvil</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Escribe tu mensaje aquí."
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                Enviar
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <span className="text-white/60">{item.title}</span>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
