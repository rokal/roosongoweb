import React, { forwardRef } from "react";
import DateSelect from "react-datepicker";
import { CalendarIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  selected: Date | null;
  label?: string;
  error?: string;
  onChange: (
    date: Date | null,
    event?: React.SyntheticEvent<any, Event>
  ) => void;
}

const DatePickerContainer = (props: any, ref: any) => {
  const { value, onClick, error } = props as any;
  return (
    <button
      onClick={onClick}
      ref={ref}
      type="button"
      className={cn(
        "inline-flex items-center justify-between w-full px-3 py-2 text-sm font-medium border  rounded-md shadow-sm text-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
        {
          "border-gray-300": !error,
          "border-red-300": error,
        }
      )}
    >
      {value || <span />}
      <CalendarIcon width={20} height={20} aria-hidden="true" />
    </button>
  );
};

const DatePickerContainerWithRef = forwardRef(DatePickerContainer);

export function DatePicker({
  onChange,
  selected,
  label,
  error,
}: DatePickerProps) {
  return (
    <div>
      <label
        className={cn("block text-sm font-medium ", {
          "focus:ring-red-500 focus:border-red-500": Boolean(error),
        })}
      >
        {label}
      </label>
      <DateSelect
        selected={selected}
        onChange={onChange}
        customInput={<DatePickerContainerWithRef error={!!error} />}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
