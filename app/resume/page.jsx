"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAngular,
  FaVuejs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFlutter,
  SiNestjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

// about data
const about = {
  title: "Acerca de mi",
  descriptions: [
    `Soy ingeniero de software fullstack con ${getMyExperienceYears()} años desarrollando aplicaciones web y móviles en producción. Fui el desarrollador principal de la web de un SaaS usado en 4 países, donde lideré su migración a TypeScript sin detener el servicio, y coordiné un equipo frontend como líder técnico y Scrum Master. Trabajo con React, Angular, Vue y TypeScript en el frontend, Node.js, NestJS y PostgreSQL en el backend, y Flutter en móvil. También diseño en Figma las interfaces que construyo.`,
    `Me gusta construir productos claros, mantenibles y fáciles de usar. Trabajo en remoto y uso IA a diario, revisando lo que genera.`,
  ],
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "David Escalante",
    },
    {
      fieldName: "Teléfono",
      fieldValue: "(+591) 72874083",
    },
    {
      fieldName: "Experiencia",
      fieldValue: `${getMyExperienceYears()} años`,
    },
    {
      fieldName: "Correo",
      fieldValue: "davidthbsossa@gmail.com",
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Boliviana",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponible",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Español (nativo), Inglés",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mi experiencia",
  description: "",
  items: [
    {
      company: "Tekov",
      description:
        "SaaS de RR. HH., control de asistencia y planillas usado en 4 países. Fui el desarrollador principal de la web.",
      position: "Desarrollador Frontend & Móvil",
      duration: "Noviembre 2022 - Octubre 2026",
      subtitle: "Mi función",
      job: [
        "Migración del frontend a TypeScript sin detener el servicio",
        "Frontend con: React | TypeScript | Redux Toolkit | Material UI",
        "Diseño de pantallas en Figma, despliegues y marcaje con huella en la app (Flutter)",
      ],
    },
    {
      company: "IO Software",
      description:
        "Modernización de un punto de venta para restaurantes: comandas en tiempo real, cobro, caja y facturación electrónica.",
      position: "Lead Frontend",
      duration: "Octubre 2024 - Junio 2025",
      subtitle: "Mi función",
      job: [
        "Líder técnico del frontend y Scrum Master",
        "Diseño y desarrollo del núcleo del punto de venta",
        "Frontend con: Vue 3 | TypeScript | Pinia | TanStack Query | WebSocket",
      ],
    },
    {
      company: "Clan Bolivia",
      description:
        "Software a medida para distintos clientes (bajo confidencialidad). Trabajé con el dueño de la empresa, que llevaba el backend.",
      position: "Desarrollador Frontend Jr",
      duration: "Diciembre 2022 - Abril 2024",
      subtitle: "Proyectos",
      job: [
        "SaaS para clínicas dentales con: Angular | PrimeNG | Supabase",
        "Sistemas a medida para logística, servicios de limpieza y un lubricentro con: Angular | PrimeNG | NgRx",
        "Prototipos de apps móviles con: FlutterFlow",
      ],
    },
    {
      company: "Proyectos freelance",
      description: "Proyectos web para clientes y colaboradores.",
      position: "Desarrollador Web Freelance",
      duration: "Octubre 2023 - Febrero 2025",
      subtitle: "Proyectos",
      job: [
        "Marketplace agropecuario (2025): módulo de administración de punta a punta con: NestJS | TypeORM | PostgreSQL | Angular | Socket.io",
        "Sitio web corporativo para una consultora de salud (2023) con: HTML | CSS | JavaScript",
      ],
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mi educación",
  description: "",
  items: [
    {
      institution: "UMRPSFXCH | Sucre, Bolivia",
      degree: "Ingeniería en Ciencias de la Computación",
      duration: "Julio 2021",
      descriptions: [
        "Excelencia Académica (R.A: 81,37)",
        "Beca Estudio por rendimiento académico (2016 – 2018)",
      ],
    },
    {
      institution: "UMRPSFXCH | Sucre, Bolivia",
      degree: "Diplomado en Docencia para Educación Superior",
      duration: "Noviembre 2022",
    },
  ],
};

// skills data
const skills = {
  title: "Mis habilidades principales",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaAngular />,
      name: "angular",
    },
    {
      icon: <FaVuejs />,
      name: "vue",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiNestjs />,
      name: "nest.js",
    },
    {
      icon: <DiPostgresql />,
      name: "postgres",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaGitAlt />,
      name: "git",
    },
    {
      icon: <SiFlutter />,
      name: "flutter",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import Experience from "@/components/Experience";
import { getMyExperienceYears } from "@/utils/date";
import { DiPostgresql } from "react-icons/di";

const Resume = () => {
  const experienceCol1 = experience.items.slice(
    0,
    Math.round(experience.items.length / 2),
  );
  const experienceCol2 = experience.items.slice(
    Math.round(experience.items.length / 2),
    experience.length,
  );
  const [experienceOpensCol1, setExperienceOpensCol1] = useState(
    Array.from(
      {
        length: experienceCol1.length,
      },
      () => false,
    ),
  );
  const [experienceOpensCol2, setExperienceOpensCol2] = useState(
    Array.from(
      {
        length: experienceCol2.length,
      },
      () => false,
    ),
  );

  const handleOpenCol1 = (index) => {
    setExperienceOpensCol1((prev) => {
      const newData = [...prev];
      newData[index] = !newData[index];
      return newData;
    });
  };
  const handleOpenCol2 = (index) => {
    setExperienceOpensCol2((prev) => {
      const newData = [...prev];
      newData[index] = !newData[index];
      return newData;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-start justify-center pb-12 xxl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[340px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Formación</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Acerca de</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="md:h-[70vh]">
                  <ul className="flex flex-col md:flex-row gap-[30px]">
                    <div className="flex-1 flex flex-col gap-[30px]">
                      {experienceCol1.map((item, index) => (
                        <Experience
                          key={index}
                          data={item}
                          open={experienceOpensCol1[index]}
                          id={index}
                          handleOpen={handleOpenCol1}
                        />
                      ))}
                    </div>
                    <div className="flex-1 flex flex-col gap-[30px]">
                      {experienceCol2.map((item, index) => (
                        <Experience
                          key={index}
                          data={item}
                          open={experienceOpensCol2[index]}
                          id={index}
                          handleOpen={handleOpenCol2}
                        />
                      ))}
                    </div>
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[70vh]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[max-content] py-6 px-10 rounded-xl flex flex-col justify-start items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <p className="text-white/60">{item.institution}</p>
                          {item.descriptions?.map((text, i) => (
                            <div
                              key={i}
                              className={`flex gap-3 ${i === 0 ? "mt-4" : ""}`}
                            >
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent mt-1"></span>
                              <p className="text-white/30 text-sm">{text}</p>
                            </div>
                          ))}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left h-[70vh]"
            >
              <div className="flex flex-col gap-[30px] pb-10">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="w-full text-white/60 mx-auto xl:mx-0">
                  {about.descriptions.map((obj, i) => (
                    <Fragment key={i}>
                      {obj}
                      <br />
                    </Fragment>
                  ))}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
