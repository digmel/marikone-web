import React from "react";
import { ContactSectionIcon } from "../icons";
import { StoreInfo } from "./StoreInfo";
import { TextInput } from "./TextInput";

export const ContactSection = () => {
  return (
    <div className="mb-64 flex flex-col items-center">
      <ContactSectionIcon />

      <div className="bg-zinc-800 w-3/4 rounded-lg mt-12 flex flex-row py-12 px-14">
        <div className="flex basis-1/4 border-r border-zinc-50 border-opacity-50 flex-col">
          <h1 className="text-accent-100 font-semibold">Store Locations</h1>

          <StoreInfo
            title="City Mall"
            address=" 32 Zakaria Paliashvili St, T'bilisi"
          />
          <StoreInfo
            title="MANGO"
            address=" 32 Zakaria Paliashvili St, T'bilisi"
          />
          <StoreInfo
            title="EAST POINT"
            address=" 32 Zakaria Paliashvili St, T'bilisi"
          />
          <StoreInfo
            title="BATUMI MALL"
            address=" 32 Zakaria Paliashvili St, T'bilisi"
          />
        </div>
        <div className="flex basis-3/4 px-12 flex-col">
          <div className="flex justify-around">
            <TextInput label="First Name" />
            <TextInput label="Last Name" />
          </div>

          {/* <div className="flex">
            <TextInput label="Email" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
