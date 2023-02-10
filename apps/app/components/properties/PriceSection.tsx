import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useSetModalState } from "@lib/recoil/modalAtomFamily";
import { useProperty } from "@lib/recoil/propertyAtom";
import { formatPrice } from "../../lib/utils/utils";

const PriceSection = () => {
  const property = useProperty();
  const setModalState = useSetModalState("leadModal");
  // const plausible = usePlausible();
  if (!property) return null;
  console.log(property)
  return (
    <div className="flex justify-center sm:justify-around my-4 flex-col sm:flex-row">
      <div >
        {property.pricePerDay && (
          <h2 className="flex text-xl text-center justify-center mb-4 sm:mb-0 rounded-lg md:text-2xl">
            <span>{formatPrice(property.pricePerDay)}</span>
            <span className="flex items-end text-sm ">/jour</span>
          </h2>
        )}
        {property.pricePerMonth && (
          <h2 className="flex text-xl text-center justify-center mb-4 sm:mb-0 rounded-lg md:text-2xl">
            <span>{formatPrice(property.pricePerMonth)}</span>
            <span className="flex items-end text-sm ">/mois</span>
          </h2>
        )}
      </div>
      <div className="  justify-center flex">
        <button
          type="button"
          onClick={() => {
            setModalState(true);
            //plausible("ld:show-lead-modal");
          }}
          className="inline-flex items-center justify-center px-4 py-2 text-sm text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Contacter l'agent
          <EnvelopeIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default PriceSection;
