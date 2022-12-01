import React from "react";
import { EmailIcon, FacebookIcon, InstagramIcon, Logo } from "../icons";

export const Header = () => {
  return (
    <div className="bg-zinc-800 py-4 px-6 flex justify-around border-b border-light border-opacity-50">
      <div className=" flex-initial w-40 invisible md:visible"></div>

      <div className="flex flex-row items-center justify-center text-zinc-100">
        <Logo />
      </div>

      <div className="flex-initial flex-row flex justify-around w-40 invisible md:visible self-center">
        <InstagramIcon />
        <FacebookIcon />
        <EmailIcon />
      </div>
    </div>
  );
};
