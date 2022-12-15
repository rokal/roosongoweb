import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import { MapPinIcon } from "@heroicons/react/24/outline";
import useOnclickOutside from "react-cool-onclickoutside";
import { useRouter } from "next/router";
import { slugifyGeoDescription } from "src/utils/utils";
import { useGeo } from "src/context/geo";

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
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    async () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
      router.push(`/search/${slugifyGeoDescription(description)}`);
      /*  const geocodes = await getGeocode({ address: description });
      const latLng = await getLatLng(geocodes[0]);
      const geo = {
        ...latLng,
        description,
        terms,
        types,
        place_id,
        reference,
      };
      console.log("📍 Coordinates: ", geo); */
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
          className="px-3 py-2 border-solid cursor-pointer border-b-1 hover:bg-primary-100 "
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref} className="w-full">
      <div className="relative w-full mt-1 rounded-md shadow-sm">
        <input
          type="text"
          className="block w-full py-3 pr-10 border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Ville, Quartier, Zone ..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <MapPinIcon className="w-7 h-7 " aria-hidden="true" />
        </div>
      </div>
      {status === "OK" && <ul className="bg-white">{renderSuggestions()}</ul>}
    </div>
  );
};
