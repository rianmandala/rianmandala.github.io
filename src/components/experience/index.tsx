import { useInfoContext } from "@/context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import BlurFade from "@/components/ui/magicui/blur-fade";
import { listExperience } from "@/constants/experience";

const Experience = () => {
  const { setActiveNavbar } = useInfoContext();
  const { inView, ref } = useInView({ threshold: 1 });

  useEffect(() => {
    const hash = "#experience";
    if (inView) {
      setActiveNavbar(hash);
      window.history.pushState(null, "", hash);
    }
  }, [inView]);

  return (
    <div id="experience" className="mt-[82px]">
      <BlurFade delay={0.3} inView>
        <h1
          ref={ref}
          className="font-bold text-custom-light md:text-[28px] text-[24px] mb-[22px]"
        >
          My Experience
        </h1>
        <div className="flex flex-wrap gap-[32px]">
          {listExperience.map((exp) => (
            <div key={exp.title}>
              <div className="mb-[16px] flex gap-[12px] items-center">
                <div className="bg-custom-secondary-dark w-[60px] h-[60px] rounded flex justify-center items-center overflow-hidden">
                  <img
                    className="w-[40px]"
                    src={exp.companyLogo}
                    alt={exp.title}
                  />
                </div>
                <div>
                  <p className="text-[16px] mb-[6px] text-custom-light">
                    {exp.title}
                  </p>
                  <span className="text-[12px] text-custom-grey">
                    {exp.date}
                  </span>
                </div>
              </div>
              <ul className="list-disc ml-[90px] text-custom-grey">
                {exp.list.map((item, idx) => (
                  <li key={idx} className="mb-[12px] leading-[22px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  );
};

export default Experience;
