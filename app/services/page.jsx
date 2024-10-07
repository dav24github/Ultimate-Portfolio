"use client";

const services = [
  {
    num: "01",
    title: "Desarrollo Web",
    slug: "web-dev",
    summary:
      "Me gusta programar cosas desde cero, y disfruto mucho llevar mis ideas a la reliadad en el navegador",
    description: (
      <div className="container">
        <img
          src="/assets/services/web-dev.png"
          // priority
          // quality={100}
          // sizes="80"
          // fill
          alt="web-dev"
          className="img-icon"
        />
        <div>
          <p>¡Transforma tus ideas en realidad!</p>
          <p>
            Programo lo que tengas en mente desde el concepto hasta su
            lanzamiento: Sistemas CRM, ERP, Tiendas online (Ecommerce) y
            Aplicaciones Web en general.
          </p>
          <br />
          <p>
            Es importante que tu aplicación web funcione correctamente
            independientemente del navegador o dispositivo que esté usando tu
            audiencia. Antes del lanzamiento, Se probará en las últimas
            versiones de los principales navegadores y en una variedad de
            dispositivos móviles para garantizar que se vea y funcione
            correctamente.
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Diseño Web",
    slug: "web-design",
    summary:
      "Valoro una estructura de contenido simple, patrones de diseño limpios e interacciones bien pensadas.",
    description: (
      <div className="container">
        <img
          src="/assets/services/ui-ux.png"
          // priority
          // quality={100}
          // sizes="80"
          // fill
          alt="ui-ux"
          className="img-icon"
        />
        <div>
          <p>¿Necesitas una página web?</p>
          <p>
            Puedo ofrecerte el tipo de solución que se ajuste más a tu negocio o
            emprendimiento: Sitios Web institucional, Portafolio, Blog, Landing
            Page, Catálogo de productos, Página informativas, etc.
          </p>
          <br />
          <p>
            Con un diseño completamente personalizado y adaptable para todo tipo
            de dispositivos (Responsive).
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Desarrollo Móvil",
    slug: "app-dev",
    summary:
      "Una de mis habilidades más recientes. Me he enfocado en desarrollar aplicaciones que sean rápidas, fáciles de usar y con un diseño elegante.",
    description: (
      <div className="container">
        <img
          src="/assets/services/phone.png"
          // priority
          // quality={100}
          // sizes="80"
          // fill
          alt="phone"
          className="img-icon"
        />
        <div>
          <p>
            Una aplicación móvil puede ofrecerte un rendimiento más rápido, una
            mejor experiencia de usuario y funcionar sin conexión. Además de
            acceder a funciones nativas del dispositivo, como la cámara o el
            GPS.
          </p>
          <p>
            Dependiendo de lo que estás buscando esta puede ser la solución para
            tí.
          </p>
        </div>
      </div>
    ),
  },
];

import { motion } from "framer-motion";
import Modal from "@/components/ui/modal";
import Image from "next/image";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pb-12 xxl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Modal
                    title={service.title}
                    description={service.description}
                    slug={service.slug}
                  />
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.summary}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
