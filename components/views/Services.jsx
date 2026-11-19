"use client";

import { motion } from "framer-motion";
import Modal from "@/components/ui/modal";
import { Fragment } from "react";
import { getContent } from "@/lib/i18n";

const Services = ({ lang }) => {
  const t = getContent(lang);
  const services = t.services.map((service) => ({
    ...service,
    description: (
      <div className="container">
        <img src={service.icon} alt={service.iconAlt} className="img-icon" />
        <div>
          {service.paragraphs.map((text, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              <p>{text}</p>
            </Fragment>
          ))}
        </div>
      </div>
    ),
  }));
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
                    lang={lang}
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
