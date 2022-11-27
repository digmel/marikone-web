import React from "react";
import { LocationIcon } from "../icons";

export const StoreInfo = ({ title, address }: Record<string, string>) => {
  return (
    <>
      <div className="pt-4 text-light flex flex-row items-center">
        <div className="flex pr-2 self-start">
          <LocationIcon />
        </div>

        <div className="flex flex-col">
          <h1 className="font-semibold">{title}</h1>
          <h1 className=" font-extralight text-xs pt-1">{address}</h1>
        </div>
      </div>
    </>
  );
};
