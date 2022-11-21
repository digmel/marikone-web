import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex justify-start pt-16 pb-32 flex-col items-center">
      <div className="">
        <h1 className="text-zinc-100 text-xl italic font-extralight">
          Fashion Designer
        </h1>
      </div>

      <div className="mt-16 flex flex-row">
        <div className="flex-col mx-4">
          <div className=" mb-8">
            <Image
              src="/assets/image1.png"
              width={390}
              height={507}
              alt="1"
              quality={30}
            />
          </div>
          <div className=" mb-8">
            <Image
              src="/assets/image4.png"
              width={390}
              height={507}
              alt="4"
              quality={30}
            />
          </div>
          <div className="mb-8">
            <Image
              src="/assets/image7.png"
              width={390}
              height={507}
              alt="7"
              quality={30}
            />
          </div>
        </div>

        <div className="flex-col mx-4">
          <div className=" mb-8">
            <Image
              src="/assets/image2.png"
              width={390}
              height={507}
              alt="2"
              quality={30}
            />
          </div>
          <div className=" mb-8">
            <Image
              src="/assets/image5.png"
              width={390}
              height={507}
              alt="5"
              quality={30}
            />
          </div>
          <div className="mb-8">
            <Image
              src="/assets/image8.png"
              width={390}
              height={507}
              alt="8"
              quality={30}
            />
          </div>
        </div>

        <div className="flex-col mx-4">
          <div className=" mb-8">
            <Image
              src="/assets/image3.png"
              width={390}
              height={507}
              alt="3"
              quality={30}
            />
          </div>
          <div className=" mb-8">
            <Image
              src="/assets/image6.png"
              width={390}
              height={507}
              alt="6"
              quality={30}
            />
          </div>
          <div className="mb-8">
            <Image
              src="/assets/image9.png"
              width={390}
              height={507}
              alt="9"
              quality={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
