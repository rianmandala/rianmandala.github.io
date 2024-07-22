import { ButtonMovingBorder } from "@/components/ui/moving-border";
import React from "react";
import { ReactTyped } from "react-typed";

const Header = () => {
  const gdriveId = "1W54t12qMhJA1OI2H2KK59clVj9FQDj_B";

  return (
    <header className="z-10 relative mt-[12%] text-custom-light flex flex-col md:flex-row flex-col-reverse justify-between items-center gap-[24px]">
      <div className="md:w-[50%] w-full">
        <span className="text-[14px] mb-[2px]">Software Engineer</span>
        <h1 className="md:leading-[60px] leading-[40px] font-bold md:text-[52px] sm:text-[42px] text-[30px] tracking-[4px] mb-[4px]">
          Hello I'm <br />
          <ReactTyped
            strings={["Rian Mandala", "Software Engineer"]}
            typeSpeed={100}
            className="text-custom-primary"
            backDelay={2000}
            loop
          />
        </h1>
        <p className="text-custom-grey text-[14px] mb-[24px] leading-[20px]">
          Dynamic and results-driven Front-End Engineer with over 3 years of
          experience specializing in building high-performance, scalable web
          applications.
        </p>
        <a
          className="no-underline"
          href={`https://drive.google.com/uc?id=${gdriveId}&export=download`}
        >
          <ButtonMovingBorder
            className="hover:text-custom-primary"
            containerClassName="md:h-16 md:w-44 h-14 w-40"
          >
            Download CV
          </ButtonMovingBorder>
        </a>
      </div>
      <div className="md:m-0 mb-[60px] md:w-[45%] w-full flex md:justify-end justify-center">
        <div className="relative">
          <i className="devicon-powershell-plain text-custom-primary absolute lg:text-[130px] sm:text-[100px] text-[80px] top-[0px] md:left-[-50px] left-[-30px]"></i>
          <div className="overflow-hidden lg:w-[400px] lg:h-[400px] sm:w-[360px] sm:h-[360px] w-[300px] h-[300px] p-2.5 rounded-[30%_70%_70%_30%_/_30%_34%_66%_70%] bg-gradient-to-b from-custom-secondary-dark to-custom-dark">
            <img
              className="w-full h-full object-cover mt-[10px]"
              src="https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721283658/portofolio/photo-profile/zeqw3xbhuwnvrkdrd2ve.png"
              alt="photo profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
