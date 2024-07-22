import React, { useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useInView } from "react-intersection-observer";
import { useInfoContext } from "@/context";
import BlurFade from "@/components/ui/magicui/blur-fade";
import { listSkill } from "@/constants/skills";

const Skills = () => {
  const { setActiveNavbar } = useInfoContext();
  const { inView, ref } = useInView({ threshold: 1 });

  useEffect(() => {
    const hash = "#skills";
    if (inView) {
      setActiveNavbar(hash);
      window.history.pushState(null, "", hash);
    }
  }, [inView]);

  return (
    <div id="skills" className="mt-[82px]">
      <BlurFade delay={0.3} inView>
        <h1
          ref={ref}
          className="font-bold text-custom-light md:text-[28px] text-[24px] mb-[22px]"
        >
          My Skills
        </h1>
        <p className="text-custom-grey md:text-[15px] text-[14px] mb-[32px]">
          Dynamic and results-driven Front-End Engineer with over 3 years of
          experience specializing in building high-performance, scalable web
          applications. Proven track record in optimizing code for speed and
          efficiency, resulting in seamless user experiences. Adept at
          translating complex requirements into reusable, fast web modules.
        </p>
        <div className="flex gap-[16px] flex-wrap">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>Hover</TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {listSkill.map((skill, idx) => (
            <BlurFade key={skill.label} delay={0.25 + idx * 0.05} inView>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="transition-all hover:scale-[0.9] shrink-0 md:w-[100px] md:h-[100px] w-[80px] h-[80px] flex justify-center items-center rounded overflow-hidden bg-custom-secondary-dark">
                      <i
                        className={`${skill.iconName} md:text-[52px] text-[42px] text-custom-light`}
                      ></i>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </BlurFade>
          ))}
        </div>
      </BlurFade>
    </div>
  );
};

export default Skills;
