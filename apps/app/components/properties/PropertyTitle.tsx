import { useRouter } from "next/router";
import { PlacesAutocomplete } from "../PlacesAutocomplete";
import { useProperty } from "../../lib/recoil/propertyAtom";
import { useScript } from "../../lib/context/script";

export const PropertyTitle = () => {
  const router = useRouter();
  const property = useProperty();
  const loaded = useScript();

  if (!property) return null;
  return (
    <div className="items-center py-5 align-middle md:flex">
      <div className="flex items-center justify-center mr-2 sm:flex lg:justify-start min-w-full">
        <button className="flex pr-4 mr-2" onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span className="ml-2 hidden md:flex">Précédent</span>
        </button>
        {loaded && (<div className="md:w-full">
          <PlacesAutocomplete />
        </div>)}
      </div>
      <h1
        title={property.title}
        className="text-lg font-extrabold tracking-tight text-gray-700 truncate "
      >
        <div>{property.title}</div>
      </h1>
    </div>
  );
};
