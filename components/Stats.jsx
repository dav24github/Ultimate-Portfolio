"use client";

import { getMyExperienceYears } from "@/utils/date";
import CountUp from "react-countup";
import { getContent } from "@/lib/i18n";

const getStats = (t) => [
  { num: getMyExperienceYears(), text: t.years },
  { num: 18, text: t.projects },
  { num: 4, text: t.countries },
  { num: 3, text: t.companies },
];

const Stats = ({ lang }) => {
  const stats = getStats(getContent(lang).home.stats);
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
