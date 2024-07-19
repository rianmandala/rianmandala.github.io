import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import Menus from "./menus";
import { useInfoContext } from "@/context";

const Navbar = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const { setActiveNavbar } = useInfoContext();

  useEffect(() => {
    const bodyScroll = () => {
      if (window.scrollY > 80) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
      if (window.scrollY < 100) {
        window.history.pushState(null, "", "/");
        setActiveNavbar("");
      }
    };
    window.addEventListener("scroll", bodyScroll);

    return () => {
      window.removeEventListener("scroll", bodyScroll);
    };
  }, []);

  return (
    <>
      <nav className="z-[99] relative text-custom-light w-full flex justify-between items-center py-[20px] bg-custom-dark">
        <Link className="text-[26px]" to="/">
          Rian Mandala
        </Link>
        <Menus />
      </nav>
      <nav
        className={`pt-[8px] px-[20px] pb-[16px] fixed shadow-sm shadow-custom-grey/10 -top-[70px] left-0 backdrop-blur-md bg-custom-dark/80 z-[99] text-custom-light w-full flex justify-between items-center py-[20px] bg-custom-dark h-0 overflow-hidden transition-all ease-in-out duration-300 ${
          showStickyNav ? "h-[70px] !top-0" : ""
        }`}
      >
        <a className="text-[22px]" href="/">
          Rian Mandala
        </a>
        <Menus />
      </nav>
    </>
  );
};

export default Navbar;
