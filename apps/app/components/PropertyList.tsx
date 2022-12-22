import { useSearchResults } from "@lib/context/search";
import Link from "next/link";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  const { result } = useSearchResults();

  return (
    <ul className="grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
      {result?.hits.map((property) => (
        <li
          key={`property-card-search${property.objectID}`}
          onClick={() =>
            console.log("search:property-card-click", {
              props: property,
            })
          }
        >
          <Link href={`/properties/${property.slug}`}>
            <PropertyCard property={property} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
