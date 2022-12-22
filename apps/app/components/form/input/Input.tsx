import React from "react";
import cn from "classnames";

import { ErrorIcon } from "../ErrorIcon";
import { ChangeHandler } from "../../../lib/types/form";

interface Props {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  name?: string;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
}

const errorInputStyle = "text-red-900 placeholder-red-300 border-red-300 ";
const InputComponent = (props: Props, inputRef: any) => {
  const {
    label,
    type,
    error,
    name,
    placeholder,
    max,
    maxLength,
    min,
    minLength,
    pattern,
    required,
    disabled,
    onChange,
    onBlur,
  } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className={cn("block text-sm font-medium text-gray-700  ", {
          "focus:ring-red-500 focus:border-red-500": Boolean(error),
        })}
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          ref={inputRef}
          type={type}
          name={name}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          required={required}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={cn(
            "block w-full rounded-md focus:outline-none sm:text-sm pr-10 py-2 border border-gray-300 shadow-sm px-3",
            { [errorInputStyle]: Boolean(error) }
          )}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ErrorIcon />
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export const Input = React.forwardRef(InputComponent);
