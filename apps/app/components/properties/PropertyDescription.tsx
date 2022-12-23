import { useProperty } from "../../lib/recoil/propertyAtom";

export const PropertyDescription = () => {
  const property = useProperty();
  if (!property) return null;
  return (
    <div className="p-10 py-4 my-4 bg-white md:mt-4">
      <h2 className="text-2xl md:text-3xl">Description du logement</h2>
      <p className="py-8 text-xl">{property.description}</p>
    </div>
  );
};
