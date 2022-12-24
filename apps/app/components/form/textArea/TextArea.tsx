import React, { forwardRef } from "react";
import cn from "classnames";
import { ErrorIcon } from "../ErrorIcon";

interface IProps {
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  ariaInvalid?: boolean;
  ariaDescription?: string;
  error?: string;
  id?: string;
  name: string;
  subTitle?: string;
  onChange: (event: any) => void;
  onBlur: (event: any) => void;
}

export const TextArea = forwardRef<HTMLTextAreaElement, IProps>(
  (
    {
      placeholder,
      label,
      defaultValue,
      error,
      id,
      name,
      ariaDescription,
      ariaInvalid,
      subTitle,
      onChange,
      onBlur,
    }: IProps,
    ref
  ) => {
    const inputClasses = cn(
      error
        ? "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
        : "",
      "block w-full pr-10  sm:text-sm rounded-md"
    );
    return (
      <div className="">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <div className="relative mt-1 ">
          <textarea
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            rows={3}
            id={id}
            className={inputClasses}
            placeholder={placeholder}
            defaultValue={defaultValue}
            aria-invalid={ariaInvalid}
            aria-describedby={ariaDescription}
          />
          {error && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ErrorIcon />
            </div>
          )}
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600" id={id}>
            {error}
          </p>
        )}
        {subTitle && <p className="mt-2 text-gray-500 text-xm">{subTitle}</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea"