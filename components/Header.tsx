import React from "react";
import { Logo } from "../icons";

export const Header = () => {
  return (
    <div className="bg-zinc-800 pt-4 pb-2 px-6 md:px-24 flex justify-center">
      <div className="flex flex-row -mt-1 items-center justify-center text-zinc-100">
        <Logo />
      </div>
    </div>
  );
};
