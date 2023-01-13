import React from "react";

type TVariant = "input" | "textarea";

type TTextInputProps = {
  label: string;
  errorMessage?: string;
  isDisabled?: boolean;
  onFocus?: any;
  placeholder?: string;
  variant?: TVariant;
  className?: string;
};

export const TextInput = ({
  label,
  isDisabled = false,
  onFocus,
  placeholder,
  variant = "input",
  className,
}: TTextInputProps) => {
  return (
    <>
      <div className={className}>
        <div className="ml-4 px-2 absolute -mt-4">
          <h1 className=" bg-light px-2 text-dark-100 ">{label}</h1>
        </div>

        {variant === "input" ? (
          <input
            className={`rounded-sm h-10 w-80 border border-dark-100 bg-transparent z-0 text-dark-100 px-4`}
            disabled={isDisabled}
            onChange={onFocus}
            placeholder={placeholder}
            autoCapitalize="none"
          />
        ) : (
          <textarea
            className={`rounded-sm w-80 border border-dark-100 bg-transparent z-0 text-dark-100 px-4 h-32 py-4`}
          />
        )}
      </div>
    </>
  );
};
