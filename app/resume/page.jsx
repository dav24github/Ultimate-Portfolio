"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiKotlin } from "react-icons/si";

// about data
const about = {
  title: "Acerca de mi",
  description:
    "Soy desarrollador de software con más de 3 años de experiencia, licenciado en Ciencia de la Computación con excelencia académica, enfocado principalmente en el desarrollo web. Me impulsa la pasión por aprender y el compromiso de compartir mis habilidades con los demás.",
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
      fieldValue: "+3 Years",
    },
    {
      fieldName: "Correo",
      fieldValue: "info@davidescalante.es",
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
      fieldValue: "Español, Ingles",
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
        "Startup dedicada al desarrollo un software para la automatización de los procesos administrativos de recursos humanos.",
      position: "Desarrollador Front/Móvil",
      duration: "Noviembre 2022 - Presente",
      subtitle: "Mi función",
      job: [
        "UI/UX con: Figma",
        "FrontEnd desarrollado con: React JS | Material UI | Redux",
        "App Móvil (Marcaje, Horarios, Solicitudes, entre otros) desarrollado con: Flutter",
      ],
    },
    {
      company: "AM Consultora y Asesora en salud",
      position: "Diseñador Web Freelance",
      duration: "Octubre - Noviembre 2023",
    },
    {
      company: "Clan Bolivia",
      description:
        "Consultora de software con clientes en Bolivia y Guatemala.",
      position: "Desarrollador Front/Móvil",
      duration: "Diciembre 2022 - Febrero 2023",
      subtitle: "Proyectos completados",
      job: [
        "Sistema de gestion (ERP) para la empresa de limpieza “JELPI” con: Angular | PrimeNG",
        "Sistema de gestion (ERP) para la empresa de mantenimiento de autos “ESPINO” con: Angular | PrimeNG",
        "Sistema de gestion (ERP) para la empresa de delivery “GOBOX” con: Angular | PrimeNG",
        "Sistema de gestion (ERP) para clínicas dentales. “ClinicAPP” con: Angular | PrimeNG | Supabase",
        "App movil para clínicas dentales. “ClinicAPP” con: FlutterFlow | Supabase",
      ],
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mi education",
  description: "",
  items: [
    {
      institution: "UMRPSFXCH | Sucre, Bolivia",
      degree: "Ingeniería en Ciencias de la Computación",
      duration: "Julio 2021",
      description: "Excelencia Académica (R.A: 81,37)",
    },
    {
      institution: "UMRPSFXCH | Sucre, Bolivia",
      degree: "Diplomado en Docencia para Educación Superior",
      duration: "Noviembre 2021",
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
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiFlutter />,
      name: "flutter",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
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
import { useState } from "react";
import Experience from "@/components/Experience";

const Resume = () => {
  const experienceCol1 = experience.items.slice(
    0,
    Math.round(experience.items.length / 2)
  );
  const experienceCol2 = experience.items.slice(
    Math.round(experience.items.length / 2),
    experience.length
  );
  const [experienceOpensCol1, setExperienceOpensCol1] = useState(
    Array.from(
      {
        length: experienceCol1.length,
      },
      () => false
    )
  );
  const [experienceOpensCol2, setExperienceOpensCol2] = useState(
    Array.from(
      {
        length: experienceCol2.length,
      },
      () => false
    )
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
                <ScrollArea className="h-[70vh]">
                  <ul className="flex gap-[30px]">
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
                          {item.description && (
                            <div className="flex gap-3 mt-4">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent mt-1"></span>
                              <p className="text-white/30 text-sm">
                                {item.description}
                              </p>
                            </div>
                          )}
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
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
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
