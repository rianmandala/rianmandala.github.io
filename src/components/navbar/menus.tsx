import { Link } from "gatsby";
import React, { MouseEvent, useEffect, useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useInfoContext } from "@/context";

const navList = [
  {
    label: "Skills",
    link: "#skills",
  },
  {
    label: "Experience",
    link: "#experience",
  },
  {
    label: "Project",
    link: "#project",
  },
  {
    label: "Contact",
    link: "#contact",
  },
];

const Menus = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const { activeNavbar, setActiveNavbar } = useInfoContext();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Example: Scroll to the element with the matching ID
      const targetElement = document.getElementById(hash.slice(1));
      if (targetElement) {
        window.scroll({
          behavior: "smooth",
          top: targetElement?.offsetTop - 80,
          left: 0,
        });
      }
    } else {
      // No hash, scroll to the top
      window.scrollTo(0, 0);
    }
  }, []);

  const handleClikNav = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const hash = e.currentTarget.hash;
    window.history.pushState(null, "", hash);
    setActiveNavbar(hash);
    const targetElement = document.getElementById(hash.slice(1));
    if (targetElement) {
      window.scroll({
        behavior: "smooth",
        top: targetElement?.offsetTop - 80,
        left: 0,
      });
    }
  };

  const handleClickNavMobile = (e: MouseEvent<HTMLAnchorElement>) => {
    setOpenSheet((prev) => !prev);
    handleClikNav(e);
  };

  return (
    <>
      <Button
        onClick={() => setOpenSheet(true)}
        className="md:hidden"
        variant="outline"
        size="icon"
      >
        <HamburgerMenuIcon className="h-[20px] w-[20px] text-custom-dark" />
      </Button>
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent className="z-[99] bg-custom-dark pt-[60px]">
          <ul className="flex flex-col gap-[16px] list-none">
            {navList.map((nav) => (
              <li
                key={nav.link}
                className="group flex text-custom-light flex-col"
              >
                <Link
                  onClick={handleClickNavMobile}
                  className="text-[14px] px-[16px] py-[12px]"
                  to={nav.link}
                >
                  {nav.label}
                </Link>
                <hr
                  className={`transition-all ease-in-out duration-300 w-0 group-hover:w-full border-custom-primary ${
                    activeNavbar === nav.link
                      ? "border-custom-primary w-full"
                      : ""
                  }`}
                />
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
      <ul className="hidden md:flex gap-[6px] list-none">
        {navList.map((nav) => (
          <li key={nav.link} className="flex flex-col">
            <Link
              onClick={handleClikNav}
              className="text-[14px] px-[16px] py-[12px]"
              to={nav.link}
            >
              {nav.label}
            </Link>
            <hr
              className={`transition-all ease-in-out duration-300 w-0 group-hover:w-full border-custom-primary ${
                activeNavbar === nav.link ? "border-custom-primary w-full" : ""
              }`}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menus;
