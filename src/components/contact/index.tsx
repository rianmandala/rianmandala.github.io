import React, { FormEvent, useEffect, useState } from "react";
import {
  EnvelopeClosedIcon,
  HomeIcon,
  MobileIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useInfoContext } from "@/context";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { setActiveNavbar } = useInfoContext();
  const { inView, ref } = useInView({ threshold: 1 });

  useEffect(() => {
    const hash = "#contact";
    if (inView) {
      setActiveNavbar(hash);
      window.history.pushState(null, "", hash);
    }
  }, [inView]);

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoadingSubmit(true);
    emailjs
      .sendForm(
        "service_l9l7u2c",
        "template_r9hm3pz",
        form,
        "LzMl6U44VhhCQL1SG"
      )
      .then(
        () => {
          toast({
            description: "Thank you, will check soon",
          });
          form.reset();
          setLoadingSubmit(false);
        },
        (err) => {
          toast({
            description: err || "Failed to send message, please try again",
          });
          form.reset();
          setLoadingSubmit(false);
        }
      );
  };

  return (
    <div className="mt-[82px]">
      <h1
        ref={ref}
        id="contact"
        className="category-menu font-bold text-custom-light md:text-[28px] text-[24px] mb-[22px]"
      >
        My Contact
      </h1>
      <div className="flex flex-wrap items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-y-4 md:w-[50%] w-full bg-custom-secondary-dark rounded p-8"
        >
          <input
            className="bg-custom-dark rounded overflow-hidden w-full text-custom-light px-4 py-3 border-[none] text-[12px]"
            required
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="bg-custom-dark rounded overflow-hidden w-full text-custom-light px-4 py-3 border-[none] text-[12px]"
            required
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="h-[200px] bg-custom-dark rounded overflow-hidden w-full text-custom-light px-4 py-3 border-[none] text-[12px]"
            required
            name="message"
            id="message"
            placeholder="Your Message"
          ></textarea>
          <Button
            className="rounded hover:bg-custom-primary/80 bg-custom-primary text-custom-dark ml-auto text-[13px]"
            type="submit"
            disabled={loadingSubmit}
          >
            {loadingSubmit && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            {loadingSubmit ? "Please wait" : "Send Message"}
          </Button>
        </form>
        <div className="md:mt-0 mt-[60px] md:pl-[100px] pl-0 flex md:w-[50%] w-full gap-[22px] flex-wrap">
          <div className="flex items-center gap-4 w-full">
            <div className="bg-custom-secondary-dark w-[50px] h-[50px] flex justify-center items-center rounded shrink-0">
              <MobileIcon className="text-custom-primary w-[24px] h-[24px]" />
            </div>
            <div>
              <div className="text-custom-grey text-[12px] mb-[6px]">Phone</div>
              <div className="text-custom-light text-[12px] mb-[6px]">
                +62 83198924523
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="bg-custom-secondary-dark w-[50px] h-[50px] flex justify-center items-center rounded shrink-0">
              <EnvelopeClosedIcon className="text-custom-primary w-[24px] h-[24px]" />
            </div>
            <div>
              <div className="text-custom-grey text-[12px] mb-[6px]">Email</div>
              <div className="text-custom-light text-[12px] mb-[6px]">
                rianmandala959@gmail.com
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="bg-custom-secondary-dark w-[50px] h-[50px] flex justify-center items-center rounded shrink-0">
              <HomeIcon className="text-custom-primary w-[24px] h-[24px]" />
            </div>
            <div>
              <div className="text-custom-grey text-[12px] mb-[6px]">
                Address
              </div>
              <div className="text-custom-light text-[12px] mb-[6px]">
                North Sumatra, Indonesia
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
