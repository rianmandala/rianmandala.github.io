import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { useInfoContext } from "@/context";
import { useInView } from "react-intersection-observer";

const listProjects = [
  {
    title: "Images-AI",
    description:
      "Break the creative barrier with DALL-E 3, the revolutionary AI image generation tool. Describe your vision in words, and watch DALL-E 3 bring it to life as a stunning, high-resolution image.",
    image:
      "https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721197280/portofolio/projects/w2xm2atpvickbxtvpspt.png",
    techStack: [
      "Typescript",
      "React js",
      "Ant design",
      "Tailwind css",
      "Claudinary",
      "Firebase",
      "Mongo DB",
      "Express",
    ],
    links: [
      {
        title: "Demo",
        link: "https://imagess-ai.web.app/",
        icon: "devicon-react-original",
      },
      {
        title: "Github",
        link: "https://github.com/rianmandala/images-ai",
        icon: "devicon-github-original",
      },
    ],
  },
  {
    title: "Imaginary",
    description:
      "Transform your photos with Imaginary's AI-powered tools for background removal, image restoration, recoloring, remove object, and more.",
    image:
      "https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721197281/portofolio/projects/ds6cfibaiw6v5kipbf4k.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Clerk",
      "Claudinary",
      "Stripe",
      "Shadcn",
      "TailwindCSS",
    ],
    links: [
      {
        title: "Demo",
        link: "https://imaginary-od9j.vercel.app/",
        icon: "devicon-react-original",
      },
      {
        title: "Github",
        link: "https://github.com/rianmandala/imaginary",
        icon: "devicon-github-original",
      },
    ],
  },
];

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
    <div className="mt-[82px]">
      <h1
        ref={ref}
        id="project"
        className="category-menu font-bold text-custom-light md:text-[28px] text-[24px] mb-[22px]"
      >
        My Projects
      </h1>
      <div className="flex flex-wrap -mx-[6px] -my-[6px]">
        {listProjects.map((project, idx) => (
          <div
            key={idx}
            className="px-[6px] py-[6px] lg:w-1/3 sm:w-1/2 w-full self-start"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
