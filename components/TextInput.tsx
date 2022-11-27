import React, { useState } from "react";

type TTextInputProps = {
  label: string;
  errorMessage?: string;
  isDisabled?: boolean;
  onFocus?: any;
  placeholder?: string;
};

export const TextInput = ({
  label,
  isDisabled = false,
  onFocus,
  placeholder,
}: TTextInputProps) => {
  return (
    <>
      <div className="">
        <div className="ml-4 px-2 absolute -mt-4">
          <h1 className=" bg-zinc-800 px-2 text-light ">{label}</h1>
        </div>
        <input
          className={`rounded-sm h-10 w-80 border border-light bg-transparent z-0 text-light px-4`}
          disabled={isDisabled}
          onChange={onFocus}
          placeholder={placeholder}
          autoCapitalize="none"
        />
      </div>
    </>
  );
};
