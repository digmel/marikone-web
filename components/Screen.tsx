import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Screen = ({ children }: any) => {
  return (
    <div className=" bg-zinc-900 md:h-screen w-screen md:fixed flex flex-col">
      <div className="flex-initial w-screen pb-4">
        <Header />
      </div>

      <div className="flex-grow w-screen">{children}</div>

      <div className="flex-initial w-screen">
        <Footer />
      </div>
    </div>
  );
};
