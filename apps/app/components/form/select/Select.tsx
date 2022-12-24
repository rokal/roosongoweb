import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import cn from "classnames";
import { SelectOption, SelectProps } from "@lib/types/form";

export function Select({
  onSelect,
  options,
  label,
  selectedValue,
  error,
}: SelectProps) {
  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const onChange = (option: SelectOption) => {
    onSelect(option.value, option);
  };

  return (
    <div>
      <Listbox value={selectedOption} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              {label}
            </Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button
                className={cn(
                  "relative w-full py-2 pl-3 pr-10 text-left bg-white border rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm",
                  {
                    "border-gray-300": !Boolean(error),
                    "border-red-300": Boolean(error),
                  }
                )}
              >
                <span className="block truncate">
                  {selectedOption?.label || "Choisir une valeur"}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronUpDownIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 w-full overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.key}
                      className={({ active }) =>
                        cn(
                          active
                            ? "text-white bg-primary-600"
                            : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-3 pr-9"
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={cn(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {option.label}
                          </span>

                          {selected ? (
                            <span
                              className={cn(
                                active ? "text-white" : "text-primary-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
