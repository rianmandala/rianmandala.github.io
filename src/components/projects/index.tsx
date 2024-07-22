import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { useInfoContext } from "@/context";
import { useInView } from "react-intersection-observer";
import BlurFade from "@/components/ui/magicui/blur-fade";
import { listProjects } from "@/constants/project";

const Projects = () => {
  const { setActiveNavbar } = useInfoContext();
  const { inView, ref } = useInView({ threshold: 1 });

  useEffect(() => {
    const hash = "#project";
    if (inView) {
      setActiveNavbar(hash);
      window.history.pushState(null, "", hash);
    }
  }, [inView]);

  return (
    <div id="project" className="mt-[82px]">
      <BlurFade delay={0.3} inView>
        <h1
          ref={ref}
          className="font-bold text-custom-light md:text-[28px] text-[24px] mb-[22px]"
        >
          My Projects
        </h1>
        <div className="flex flex-wrap -mx-[6px] -my-[6px]">
          {listProjects.map((project, idx) => (
            <BlurFade
              className="px-[6px] py-[6px] lg:w-1/3 sm:w-1/2 w-full self-start"
              key={idx}
              delay={0.25 + idx * 0.05}
              inView
            >
              <div className="bg-custom-secondary-dark pb-[2px] rounded overflow-hidden">
                <img
                  className="w-full h-[250px] object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div className="pt-[22px] pb-0 px-4">
                  <h2 className="md:text-[24px] text-[21px] font-bold text-custom-light mb-1">
                    {project.title}
                  </h2>
                  <p className="line-clamp-3 text-xs text-custom-grey leading-[22px] overflow-hidden mb-3">
                    {project.description}
                  </p>
                  <div className="text-xs flex flex-wrap gap-1">
                    {project.techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="text-custom-light"
                        variant="outline"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between mt-8 mb-6 mx-0">
                    {project.links.map((item, idx) => (
                      <a
                        key={idx}
                        className={`grow flex justify-center items-center gap-1.5 no-underline text-custom-primary text-[14px] relative ${
                          idx === 0
                            ? "border-r-custom-primary border-r border-solid"
                            : ""
                        }`}
                        href={item.link}
                        target="_blank"
                      >
                        <i className={item.icon}></i>
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </BlurFade>
    </div>
  );
};

export default Projects;
