import React from "react";
import { AboutSectionIcon } from "../icons";

export const AboutSection = () => {
  return (
    <div className="bg-zinc-800 md:py-16 py-12 w-screen mb-32 flex flex-col items-center">
      <AboutSectionIcon />
      <h1 className="text-zinc-100 md:w-2/6 w-screen px-4 text-center font-extralight md:mt-8 mt-4">
        Creative Fashion Designer from Tbilisi. I strive to create garments that
        seamlessly blend the concepts of fashion, art and craftsmanship in a way
        that is unique yet timeless.
      </h1>
    </div>
  );
};
