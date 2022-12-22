import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useSetModalState } from "@lib/recoil/modalAtomFamily";
import { useProperty } from "@lib/recoil/propertyAtom";
import { formatPrice } from "../../lib/utils/utils";

const PriceSection = () => {
  const property = useProperty();
  const setModalState = useSetModalState("leadModal");
  // const plausible = usePlausible();
  if (!property) return null;
  return (
    <div className="flex justify-around my-4">
      <h2 className="inline-flex text-xl text-center rounded-lg md:text-2xl">
        <span>{formatPrice(property.price)}</span>
        <span className="flex items-end text-sm ">/mois</span>
      </h2>
      <button
        type="button"
        onClick={() => {
          setModalState(true);
          //plausible("ld:show-lead-modal");
        }}
        className="inline-flex items-center px-4 text-sm text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Contacter l agent
        <EnvelopeIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
      </button>
    </div>
  );
};

export default PriceSection;
