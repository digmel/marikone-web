import React from "react";
import Image from "next/image";

export const PopularSection = () => {
  return (
    <div className="w-screen mb-32 flex flex-col items-center">
      <h1 className="text-dark-200 text-2xl italic font-extralight">Popular</h1>

      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex md:w-1/4 w-screen">
          <div className="flex my-10 flex-col items-center -mt-0">
            <Image
              src="/assets/corset-black.png"
              width={500}
              height={450}
              alt="1"
              quality={30}
            />

            <div className=" text-dark-200 ">
              <h1 className="font-semibold text-center">Black Corset</h1>
              <h1 className="text-center font-extralight mt-4 mx-12 md:px-6">
                Featuring one layer of high quality cotton twill that’s
                laminated to the outer fashion fabric.
              </h1>
            </div>
          </div>
        </div>

        <div className="flex md:w-1/4 w-screen ">
          <div className="flex my-10 flex-col items-center">
            <Image
              src="/assets/corset-leather.png"
              width={350}
              height={450}
              alt="2"
              quality={30}
            />

            <div className="text-dark-200  ">
              <h1 className="font-semibold text-center md:mt-8 mt-4">
                Leather Corset
              </h1>
              <h1 className="text-center font-extralight mt-4 mx-12 md:px-6 mb-8">
                Made with high-quality genuine leather, classic Black Leather
                Corset for all types of outfits.
              </h1>
            </div>
          </div>
        </div>

        <div className="flex md:w-1/4 w-screen ">
          <div className="flex my-10 flex-col items-center">
            <Image
              src="/assets/corset-floral.png"
              width={350}
              height={450}
              alt="4"
              quality={30}
            />

            <div className=" text-dark-200 ">
              <h1 className="font-semibold text-center md:mt-8 mt-4">
                Floral Corset
              </h1>
              <h1 className="text-center font-extralight mt-4 mx-12 md:px-6">
                Tiny spring flowers cover this corset. Totally cotton with
                matching cotton details.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
