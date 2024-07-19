import { HeartFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex text-custom-light justify-center items-center text-sm mt-[100px] px-0 py-3 bg-custom-secondary-dark">
      Made with
      <HeartFilledIcon className="mx-[3px] text-red-500 w-[18px] h-[18px]" />
      by Rian mandala
    </footer>
  );
};

export default Footer;
