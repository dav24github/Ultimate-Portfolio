"use client";

import { useRef, useState, Suspense } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaRegCheckCircle } from "react-icons/fa";

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
    href: "https://wa.me/59172874083",
  },
  {
    icon: <FaEnvelope />,
    title: "Correo",
    description: "davidthbsossa@gmail.com",
    href: "mailto:davidthbsossa@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Ubicación",
    description: "Sucre, Bolivia · Remoto",
  },
];

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ContactPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const [error, setError] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);
  const topic = useRef();
  const firstName = useRef();
  const lastname = useRef();
  const email = useRef();
  const phone = useRef();
  const description = useRef();

  function submitForm() {
    if (
      firstName.current.value !== "" &&
      lastname.current.value !== "" &&
      topic.current.textContent !== "" &&
      topic.current.textContent !== "¿Sobre qué quieres hablar?" &&
      email.current.value !== "" &&
      description.current.value !== ""
    ) {
      setError(false);
      setSendError(false);
      setLoading(true);
      fetch("https://formsubmit.co/ajax/davidthbsossa@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Asunto: "Mensaje Portfolio",
          Correo: email.current.value,
          Telefono: phone.current.value,
          Nombre: `${firstName.current.value} ${lastname.current.value}`,
          Servicio: topic.current.textContent,
          Mensaje: description.current.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === false || data.success === "false") {
            throw new Error(data.message);
          }
          setLoading(false);
          setConfirmation(true);

          setTimeout(() => {
            setConfirmation(false);
          }, 6000);
        })
        .catch(() => {
          setLoading(false);
          setSendError(true);
        });
    } else {
      setError(true);
    }
  }

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
            <form
              action={submitForm}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Ponte en contacto</h3>
              <p className="text-white/60">
                Si tienes una oferta de trabajo, un proyecto o simplemente
                quieres saludar, te responderé lo antes posible.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Nombre"
                  ref={firstName}
                  onChange={() => setError(false)}
                />
                <Input
                  type="lastname"
                  placeholder="Apellido"
                  ref={lastname}
                  onChange={() => setError(false)}
                />
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  ref={email}
                  onChange={() => setError(false)}
                />
                <Input
                  type="phone"
                  placeholder="Número de teléfono (opcional)"
                  ref={phone}
                  onChange={() => setError(false)}
                />
              </div>
              {/* select */}

              <Select
                defaultValue={
                  search == "web-dev"
                    ? "Desarrollo Web"
                    : search === "web-design"
                      ? "Diseño de interfaces"
                      : search === "app-dev"
                        ? "Desarrollo Móvil"
                        : ""
                }
              >
                <SelectTrigger ref={topic} className="w-full">
                  <SelectValue placeholder="¿Sobre qué quieres hablar?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Oferta de empleo">
                      Oferta de empleo
                    </SelectItem>
                    <SelectItem value="Desarrollo Web">
                      Desarrollo Web
                    </SelectItem>
                    <SelectItem value="Diseño de interfaces">
                      Diseño de interfaces
                    </SelectItem>
                    <SelectItem value="Desarrollo Móvil">
                      Desarrollo Móvil
                    </SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                ref={description}
                className="h-[200px]"
                placeholder="Escribe tu mensaje aquí."
                onChange={() => setError(false)}
              />
              {/* btn */}
              <div className="w-full flex justify-between items-center">
                {loading ? (
                  <span
                    size="md"
                    className="min-w-40 h-[48px] flex justify-center items-center"
                  >
                    Enviando...
                  </span>
                ) : (
                  <Button size="md" className="min-w-40">
                    Enviar
                  </Button>
                )}
                {confirmation && (
                  <p className="text-sm flex gap-1 items-center">
                    <FaRegCheckCircle className="text-[#01C9A0]" />
                    <span>Mensaje correctamente enviado</span>
                  </p>
                )}
                {error && (
                  <p className="text-xs text-[#fe4d5f]">
                    ¡Completa todos los campos!
                  </p>
                )}
                {sendError && (
                  <p className="text-xs text-[#fe4d5f]">
                    No se pudo enviar. Escríbeme a davidthbsossa@gmail.com
                  </p>
                )}
              </div>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className={cn(
                      "flex items-center gap-6",
                      item.href
                        ? "cursor-pointer hover:bg-[#27272c] rounded-md transition-all duration-300"
                        : "cursor-default pointer-events-none",
                    )}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    href={item.href ?? "#"}
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <span className="text-white/60">{item.title}</span>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Contact = () => {
  return (
    <Suspense>
      <ContactPage />
    </Suspense>
  );
};

export default Contact;
