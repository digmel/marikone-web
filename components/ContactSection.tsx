import React from "react";
import { ContactSectionIcon } from "../icons";
import { StoreInfo } from "./StoreInfo";
import { TextInput } from "./TextInput";

export const ContactSection = () => {
  return (
    <div className="mb-64 flex flex-col items-center">
      <ContactSectionIcon />

      <div className="bg-zinc-800 w-fit rounded-lg mt-12 flex flex-row py-12 px-14">
        <div className="flex border-r border-zinc-50 border-opacity-50 flex-col pr-12 -mt-2">
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

        <div className="flex basis-3/4 flex-col items-center justify-center pl-12">
          <TextInput label="Name" className="mb-8" />
          <TextInput label="Email" className="mb-8" />
          <TextInput label="Message" variant="textarea" className="mb-8" />

          <button className="w-32 h-12 bg-accent-200 rounded self-start ml-4">
            <h1 className="text-dark-200 text-lg">Submit</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
