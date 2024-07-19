import { useInfoContext } from "@/context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const listExperience = [
  {
    title: "Software Engineer-Web Platform At Tokopedia",
    date: "Oct 2021 - Now",
    companyLogo:
      "https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721196465/portofolio/experience/company-logo/kvu1kl1fggxzbwzkummz.png",
    list: [
      "Work closely with product, backend, design teams to develop critical features for Tokopedia web platform, focusing on the Product Detail Page, Review Page, and Discussion Page",
      "Advocated and implemented best practices including modular coding patterns, automated testing, and use of Webpack for efficient builds.",
      "Identified and resolved performance bottlenecks on the Product Detail Page and Review Page, resulting in a 50% improvement in page load speed.",
      "Developed a CLI tool to streamline the adjustment of token colors for dark mode and color blindness, reducing development time by 100%.",
    ],
  },
  {
    title: "Freelance External Code Reviewer At Dicoding",
    date: "Aug 2020 - Now",
    companyLogo:
      "https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721196465/portofolio/experience/company-logo/ylutmxqepvutbcjnicew.png",
    list: [
      "Provided in-depth code reviews and feedback, emphasizing high code quality and adherence to best practices.",
      "Assisted in debugging and improving performance across various student projects, fostering a culture of excellence and continuous improvement.",
    ],
  },
  {
    title: "Front-End Engineer At Oncoding",
    date: "Oct 2018 - Oct 2019",
    companyLogo:
      "https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721196465/portofolio/experience/company-logo/vj4m3rwn8dob4rebuqk7.png",
    list: [
      "Skillfully converted detailed Figma prototypes into fully functional and responsive UI/UX designs for both web and mobile platforms.",
      "Leveraged the power of Angular and Ionic frameworks to create dynamic and user-friendly interfaces, ensuring seamless performance across different devices and screen sizes.",
    ],
  },
];

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
    <div className="mt-[82px]">
      <h1
        ref={ref}
        id="experience"
        className="category-menu font-bold text-custom-light md:text-[28px] text-[24px] mb-[22px]"
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
                <span className="text-[12px] text-custom-grey">{exp.date}</span>
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
    </div>
  );
};

export default Experience;
