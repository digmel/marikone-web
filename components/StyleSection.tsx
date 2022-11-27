import React from "react";
import { StyleSectionIcon } from "../icons";
import Image from "next/image";

export const StyleSection = () => {
  return (
    <div className="w-screen mb-32 flex flex-col items-center">
      <StyleSectionIcon />

      <div className="mt-16 flex flex-row -mx-2">
        <div className="flex-col mx-2">
          <div className=" mb-4">
            <Image
              src="/assets/bw1.png"
              width={400}
              height={268}
              alt="1"
              quality={30}
            />
          </div>
          <div className="">
            <Image
              src="/assets/bw2.png"
              width={400}
              height={422}
              alt="2"
              quality={30}
            />
          </div>
        </div>

        <div className="flex-col mx-2">
          <div className="">
            <Image
              src="/assets/bw3.png"
              width={400}
              height={422}
              alt="2"
              quality={30}
            />
          </div>
          <div className=" mt-4">
            <Image
              src="/assets/bw4.png"
              width={400}
              height={268}
              alt="1"
              quality={30}
            />
          </div>
        </div>

        <div className="flex-col mx-2">
          <div className=" mb-4">
            <Image
              src="/assets/bw5.png"
              width={400}
              height={268}
              alt="1"
              quality={30}
            />
          </div>
          <div className="">
            <Image
              src="/assets/bw6.png"
              width={400}
              height={422}
              alt="2"
              quality={30}
            />
          </div>
        </div>

        <div className="flex-col mx-2">
          <div className="">
            <Image
              src="/assets/bw7.png"
              width={400}
              height={422}
              alt="2"
              quality={30}
            />
          </div>
          <div className=" mt-4">
            <Image
              src="/assets/bw8.png"
              width={400}
              height={268}
              alt="1"
              quality={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
