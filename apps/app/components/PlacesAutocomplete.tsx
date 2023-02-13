import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import { MapPinIcon } from "@heroicons/react/24/outline";
import useOnclickOutside from "react-cool-onclickoutside";
import { useRouter } from "next/router";
import { slugifyGeoDescription } from "../lib/utils/utils";
import { useGeo } from "@lib/context/geo";
import { STORAGE_KEYS, useLocalStorage } from "@lib/hooks/useLocalStorage";

const { PREVIOUS_SEARCH } = STORAGE_KEYS;

interface LocationStorage {
  description: string;
  url: string;
}

export const PlacesAutocomplete = () => {
  const router = useRouter();

  const { geo } = useGeo();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: {
        country: "bfa",
      },
    },
    debounce: 300,
    defaultValue: geo.formatted_address,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
      async () => {
        setValue(description, false);
        clearSuggestions();
        router.push(`/search/${slugifyGeoDescription(description)}`);
      };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className="px-5 py-2 text-left border-solid cursor-pointer border-b-1 hover:bg-primary-100 border-b"
          title={`${main_text} ${secondary_text} `}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref} className="relative w-full">
      <div className="relative w-full mt-1 rounded-md shadow-sm">
        <input
          type="text"
          className="block w-full px-5 py-3 border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Ville, Quartier, Zone ..."
        />
        <div className="absolute inset-y-2 right-0 flex items-center pr-3 pointer-events-none ">
          <MapPinIcon className="w-7 h-7 bg-white " aria-hidden="true" />
        </div>
      </div>
      {status === "OK" && <ul className="bg-white absolute top-15 z-10 w-full">{renderSuggestions()}</ul>}
    </div>
  );
};
