import React from "react";
import { EmailIcon, FacebookIcon, InstagramIcon, Logo } from "../icons";

export const Footer = () => {
  return (
    <div className="bg-zinc-800 py-6 px-6 flex justify-around border-t border-zinc-100 flex-col md:flex-row">
      <div className="flex flex-row items-center justify-center text-zinc-100 invisible md:visible">
        <Logo />
      </div>

      <div className="flex-initial flex-row flex justify-around w-40 self-center -mt-12 md:mt-0">
        <InstagramIcon />
        <FacebookIcon />
        <EmailIcon />
      </div>

      <div className="flex-initial md:w-40 justify-center text-zinc-100 flex flex-row md:flex-col mt-4 md:mt-0">
        <h1 className="pr-1 text-sm">© 2022 MARIKONE</h1>
        <h1 className="pr-1 text-sm">All rights reserved.</h1>
      </div>
    </div>
  );
};
