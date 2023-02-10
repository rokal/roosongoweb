import Image from "next/image";
import { FaBed, FaBath, FaToilet } from "react-icons/fa";
import { SearchProperty } from "@lib/types/searchResponse";
import { formatPrice } from "@lib/utils/utils";
import { FallbackImage } from "./FallbackImage";
interface Props {
  property: SearchProperty;
}

function PropertyCard({ property }: Props) {
  const bottomInfos = (
    <>
      <dt className="sr-only">Information supplémentaires</dt>
      <dd className="flex justify-between px-4 pt-1 text-xs">
        <div className="flex flex-row content-center " title="2 chambres">
          <span className="flex flex-col justify-center">
            <FaBed />
          </span>
          <span className="px-1">
            {property.nbBedrooms}{" "}
            {`chambre${property?.nbBedrooms && property?.nbBedrooms > 1 ? "s" : ""
              }`}
          </span>
        </div>
        <div className="flex flex-col justify-center" title="Douche interne">
          <div className="flex px-4 ">
            <span className="flex flex-col justify-center">
              <FaBath />
            </span>
            <span className="px-1">
              {property.amenities?.includes("private-bath") ? "Douche privée" : "Douche commune"}
            </span>
          </div>
        </div>
      </dd>
      <dt className="sr-only">Actions</dt>
    </>
  );
  return (
    <div className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow">
      <div className="flex flex-col flex-1 overflow-hidden max-h-50">
        <div className="relative flex items-center justify-center h-80">
          <FallbackImage
            className="flex flex-1 object-cover pointer-events-none group-hover:opacity-75"
            src={property.photos?.[0] || ''}
            alt="Image du logement"
            fill
          />
        </div>
      </div>
      <div className="p-1">
        <dl className="flex flex-col justify-between flex-grow py-2">
          <dt className="sr-only">Prix</dt>
          <dd className="mt-3">
            <span className="px-2 py-1 text-lg font-medium text-green-800 bg-green-100 rounded-full">
              {`${formatPrice(property.pricePerDay)} /mois`}
            </span>
          </dd>
        </dl>
        {bottomInfos}
      </div>
    </div>
  );
}

export default PropertyCard;
