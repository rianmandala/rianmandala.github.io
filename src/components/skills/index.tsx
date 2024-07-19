import React, { useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useInView } from "react-intersection-observer";
import { useInfoContext } from "@/context";

const listSkill = [
  {
    label: "HTML 5",
    iconName: "devicon-html5-plain",
  },
  {
    label: "CSS 3",
    iconName: "devicon-css3-plain",
  },
  {
    label: "Javascript(ES6+)",
    iconName: "devicon-javascript-plain",
  },
  {
    label: "Typescript",
    iconName: "devicon-typescript-plain",
  },
  {
    label: "react.js",
    iconName: "devicon-react-original",
  },
  {
    label: "SCSS/SASS",
    iconName: "devicon-sass-original",
  },
  {
    label: "Graphql",
    iconName: "devicon-graphql-plain",
  },
  {
    label: "Webpack",
    iconName: "devicon-webpack-plain",
  },
  {
    label: "Gulp",
    iconName: "devicon-gulp-plain",
  },
  {
    label: "Ionic",
    iconName: "devicon-ionic-original",
  },
  {
    label: "Git",
    iconName: "devicon-git-plain",
  },
  {
    label: "Jest",
    iconName: "devicon-jest-plain",
  },
  {
    label: "Figma",
    iconName: "devicon-figma-plain",
  },
];

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
    <div className="mt-[82px]">
      <h1
        ref={ref}
        id="skills"
        className="category-menu font-bold text-custom-light md:text-[28px] text-[24px] mb-[22px]"
      >
        My Skills
      </h1>
      <p className="text-custom-grey md:text-[15px] text-[14px] mb-[32px]">
        Dynamic and results-driven Front-End Engineer with over 3 years of
        experience specializing in building high-performance, scalable web
        applications. Proven track record in optimizing code for speed and
        efficiency, resulting in seamless user experiences. Adept at translating
        complex requirements into reusable, fast web modules.
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
        {listSkill.map((skill) => (
          <TooltipProvider key={skill.label}>
            <Tooltip>
              <TooltipTrigger>
                <div className="shrink-0 md:w-[100px] md:h-[100px] w-[80px] h-[80px] flex justify-center items-center rounded overflow-hidden bg-custom-secondary-dark">
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
        ))}
      </div>
    </div>
  );
};

export default Skills;
