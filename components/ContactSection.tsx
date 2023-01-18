import React, { useState } from "react";
import { ContactSectionIcon } from "../icons";
import { StoreInfo } from "./StoreInfo";
import { TextInput } from "./TextInput";

const URL =
  "https://script.google.com/macros/s/AKfycbyWA81iY-k9_UAx78vEvaMEwJEtXcpJuiqr1lh3RmvRHauPZjP7XXpl7ReJPkMT5Ujo1w/exec";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const params = {
    email,
    name,
    message,
  };

  async function sendEmail() {
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(params),
    });

    const res = await response.json();
    if (res?.result?.contentLength > 0) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="opacity-0 md:opacity-100">
        <h1 className="text-dark-200 text-2xl italic font-extralight">
          Contact
        </h1>
      </div>

      <div className="bg-section md:w-fit w-screen rounded-lg mt-12 flex md:flex-row flex-col py-12 md:px-14">
        <div className="flex md:border-r bg-section md:bg-transparent border-dark-100 border-opacity-10 flex-col md:pr-12 md:-mt-2 md:items-start items-center py-12 w-screen md:w-fit">
          <h1 className="text-body font-semibold text-xl pb-4">
            Store Locations
          </h1>

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

        <div className="md:hidden mt-24 mb-12 self-center scale-75 z-0">
          <ContactSectionIcon />
        </div>

        <div className="flex basis-3/4 flex-col items-center justify-center md:pl-12">
          <TextInput
            label="Name"
            className="mb-8"
            onChange={(e: any) => setName(e.target.value)}
            value={name}
          />
          <TextInput
            label="Email"
            className="mb-8"
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
          />
          <TextInput
            label="Message"
            variant="textarea"
            className="mb-8"
            onChange={(e: any) => setMessage(e.target.value)}
            value={message}
          />

          <button
            className="w-32 h-12 bg-accent-200 rounded md:self-start md:ml-4 self-center"
            onClick={sendEmail}
          >
            <h1 className="text-dark-200 text-lg">Submit</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
