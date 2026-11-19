"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useMemo } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { AppWindow, PhoneIcon } from "lucide-react";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { cn } from "@/lib/utils";
import classes from "./Work.module.scss";
import { getContent } from "@/lib/i18n";

const Work = ({ lang }) => {
  const t = getContent(lang).work;
  const projectsData = t.projects;
  const [show, setShow] = useState(false);
  const [project, setProject] = useState();
  const [filter, setFilter] = useState("dev");
  const projects = useMemo(
    () => projectsData.filter((obj) => obj.category === filter),
    [filter, projectsData],
  );

  useEffect(() => {
    setShow(false);
    setProject(projects[0]);
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, [filter, projects]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  if (!project) return;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-start pb-12 xxl:py-0"
    >
      <div className="container mx-auto">
        <div className="mb-2 w-full flex gap-16 justify-center">
          <div
            className={cn(
              "cursor-pointer flex flex-col gap-2 items-center w-[100px] rounded-md py-2 transition-all duration-300",
              filter !== "dev" ? "hover:bg-[#192a45]" : "",
            )}
            onClick={() => setFilter("dev")}
          >
            <FaLaptopCode
              className={cn(
                "text-4xl",
                filter === "dev" ? "text-accent" : "text-white/40",
              )}
            />
            <p
              className={cn(
                "text-xs",
                filter === "dev" ? "text-white" : "text-white/40",
              )}
            >
              {t.filters.dev}
            </p>
          </div>
          <div
            className={cn(
              "cursor-pointer flex flex-col gap-2 items-center w-[100px] rounded-md py-2 transition-all duration-300",
              filter !== "design" ? "hover:bg-[#192a45]" : "",
            )}
            onClick={() => setFilter("design")}
          >
            <MdOutlineDesignServices
              className={cn(
                "text-4xl",
                filter === "design" ? "text-accent" : "text-white/40",
              )}
            />
            <p
              className={cn(
                "text-xs",
                filter === "design" ? "text-white" : "text-white/40",
              )}
            >
              {t.filters.design}
            </p>
          </div>
          <div
            className={cn(
              "cursor-pointer flex flex-col gap-2 items-center w-[100px] rounded-md py-2 transition-all duration-300",
              filter !== "phone" ? "hover:bg-[#192a45]" : "",
            )}
            onClick={() => setFilter("phone")}
          >
            <IoIosPhonePortrait
              className={cn(
                "text-4xl",
                filter === "phone" ? "text-accent" : "text-white/40",
              )}
            />
            <p
              className={cn(
                "text-xs",
                filter === "phone" ? "text-white" : "text-white/40",
              )}
            >
              {t.filters.phone}
            </p>
          </div>
        </div>
        <div className={classes.divider} />
        <div className="mt-10 flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live !== "" && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t.tooltips.live}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                {project.github !== "" && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t.tooltips.github}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* website project button */}
                {project.website && (
                  <Link href={project.website} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <TbWorldWww className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t.tooltips.website}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            {show && (
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/* image */}
                        <div className="relative w-full h-full">
                          <img
                            src={project.image}
                            // fill
                            className={cn("object-cover h-full", project.imageClassName)}
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* slider buttons */}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
