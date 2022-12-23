import { FaBath, FaBed, FaToilet } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import { useProperty } from "@lib/recoil/propertyAtom";
import { Property } from "../../lib/types/property";
import InfoBox, { InfoBoxProps } from "./InfoBox";

const createInfosBoxes = (property: Property | null): InfoBoxProps[] => {
  if (!property) return [];
  return [
    {
      icon: <FaBed className="w-8 h-8" />,
      bgColor: "bg-pink-600",
      label: "Nombre de pièces",
      value: `${property.nbBedrooms}`,
    },
    {
      icon: <FaBath className="w-8 h-8" />,
      bgColor: "bg-yellow-500",
      label: "Type de douche",
      value:
        property.privateBathroom === undefined
          ? "Non défini"
          : property.privateBathroom === true
          ? "Privée"
          : "Commune",
    },
    {
      icon: <FaToilet className="w-8 h-8" />,
      bgColor: "bg-green-500",
      label: "Type de toilette",
      value:
        property.privateToilet === undefined
          ? "Non défini"
          : property.privateBathroom === true
          ? "Privées"
          : "Communes",
    },
    {
      icon: <MdKitchen className="w-8 h-8" />,
      bgColor: "bg-purple-600",
      label: "Type de cuisine",
      value:
        property.privateKitchen === undefined
          ? "Non défini"
          : property.privateKitchen === true
          ? "Privées"
          : "Communes",
    },
  ];
};

const PropertyInfoBoxes = () => {
  const property = useProperty();
  const infoBoxes = createInfosBoxes(property);
  return (
    <div className="grid grid-cols-1 gap-5 mt-2 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {infoBoxes.map((info, index) => (
        <InfoBox key={`infobox-${index}`} {...info} />
      ))}
    </div>
  );
};

export default PropertyInfoBoxes;
