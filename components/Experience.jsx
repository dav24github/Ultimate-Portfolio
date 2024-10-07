"use client";

import classes from "./Experience.module.scss";

import { ChevronDown, LucideArrowBigRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Experience = ({ data, open, handleOpen, id }) => {
  return (
    <li
      className={cn(
        "bg-[#232329]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 relative",
        data.job && "cursor-pointer pb-12",
        classes.card
      )}
      onClick={() => handleOpen(id)}
    >
      <span className="text-accent text-sm">{data.duration}</span>
      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
        {data.position}
      </h3>
      <div className="flex gap-3">
        {/* dot */}
        <span className="w-[6px] h-[6px] rounded-full bg-accent mt-3"></span>
        <p className="text-white/60">{data.company}</p>
      </div>

      {data.job && open && (
        <div className={classes.job}>
          <p className="text-sm text-white/60">{data.description}</p>
          <div className={classes.details}>
            <p className="text-sm text-white/60">{data.subtitle + ":"}</p>
            {data.job.map((obj, index) => (
              <div key={index} className={classes.detail}>
                <LucideArrowBigRight
                  className={cn("text-white/60", classes.icon)}
                />
                <p className="text-sm text-white/60">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.job && (
        <ChevronDown className={cn(classes.arrow, open && classes.open)} />
      )}
    </li>
  );
};

export default Experience;
