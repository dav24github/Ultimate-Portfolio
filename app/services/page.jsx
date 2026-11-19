"use client";

const services = [
  {
    num: "01",
    title: "Desarrollo Web",
    slug: "web-dev",
    summary:
      "Construyo aplicaciones web de principio a fin, desde la interfaz hasta la API y la base de datos.",
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
          <p>
            He desarrollado sistemas de gestión, plataformas SaaS y
            aplicaciones a medida que hoy usan empresas en 4 países. Trabajo
            con React, Angular, Vue y TypeScript en el frontend, y Node.js con
            bases de datos SQL en el backend.
          </p>
          <br />
          <p>
            Pruebo cada entrega en los principales navegadores y dispositivos
            antes de salir a producción.
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Diseño de interfaces",
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
          <p>
            Diseño interfaces claras y responsive que funcionan igual de bien en
            escritorio y móvil. Paso de un diseño en Figma a componentes
            reutilizables y fáciles de mantener.
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
      "Desarrollo aplicaciones móviles rápidas, fáciles de usar y con un diseño elegante.",
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
            Desarrollo apps móviles con Flutter que acceden a funciones nativas
            del dispositivo, como la cámara o el GPS, y que siguen funcionando
            sin conexión.
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
