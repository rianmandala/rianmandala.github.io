import {
  EnvelopeClosedIcon,
  HomeIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import React from "react";

export const listContact = [
  {
    icon: <MobileIcon className="text-custom-primary w-[24px] h-[24px]" />,
    label: "Phone",
    value: "+62 83198924523",
  },
  {
    icon: (
      <EnvelopeClosedIcon className="text-custom-primary w-[24px] h-[24px]" />
    ),
    label: "Email",
    value: "rianmandala959@gmail.com",
  },
  {
    icon: <HomeIcon className="text-custom-primary w-[24px] h-[24px]" />,
    label: "Address",
    value: "North Sumatra, Indonesia",
  },
];
