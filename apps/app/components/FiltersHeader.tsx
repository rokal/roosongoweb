import { useScript } from "@lib/context/script";
import { PlacesAutocomplete } from "./PlacesAutocomplete";

const FilterHeader = () => {
  const loaded = useScript();
  return (
    <div className="flex justify-end">
      <div className="justify-start h-16 py-1 pr-2 sm:pr-3 md:pr-5 sm:w-2/3 md:w-1/2 lg:w-1/3">
        {loaded && <PlacesAutocomplete />}
      </div>
      <div className="flex items-center flex-1 py-1">{/*  filters */}</div>
    </div>
  );
};

export default FilterHeader;
