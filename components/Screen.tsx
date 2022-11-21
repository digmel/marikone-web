import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Screen = ({ children }: any) => {
  return (
    <div className=" bg-zinc-900 min-h-screen w-screen flex flex-col">
      <div className="flex-initial w-screen fixed">
        <Header />
      </div>

      <div className="w-screen overflow-visible mt-24 ">{children}</div>

      <div className="flex-initial w-screen">
        <Footer />
      </div>
    </div>
  );
};
