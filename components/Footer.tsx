import React from "react";
import { EmailIcon, FacebookIcon, InstagramIcon, Logo } from "../icons";

export const Footer = () => {
  return (
    <div className="mx-36 flex justify-around border-t border-light border-opacity-50 flex-col md:flex-row">
      <div className="flex flex-row items-center justify-center text-light invisible md:visible w-24 h-24 -ml-36 -mt-4 pt-6">
        <Logo />
      </div>

      <div className="flex-initial flex-row flex justify-around w-40 self-center -mt-12 md:mt-0">
        <InstagramIcon />
        <FacebookIcon />
        <EmailIcon />
      </div>

      <div className="flex-initial md:w-40 justify-center text-light flex flex-row md:flex-col mt-4 md:mt-0 -mr-36 text-opacity-50">
        <h1 className="pr-1 text-sm text-end font-extralight">
          © 2022 MARIKONE
        </h1>
        <h1 className="pr-1 text-sm text-end  font-extralight">
          All rights reserved.
        </h1>
      </div>
    </div>
  );
};
