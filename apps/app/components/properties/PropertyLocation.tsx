import { useProperty } from "@lib/recoil/propertyAtom";

interface StaticImgParams {
  latLng: string;
  widthCrossHeight?: string;
  zoom?: number;
}

const getStaticMapSrc = ({
  latLng,
  widthCrossHeight = "990x450",
  zoom = 14,
}: StaticImgParams) => {
  //  return `${baseUrl}?center=${latLng}&zoom=14&size=${widthCrossHeight}&language=fr&key=${key}&maptype=roadmap&markers=color:green%7Clabel:R|${latLng}`;
  const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
  const key = "AIzaSyCMHlZuY5uw5lE8bnBTM6uhLHJX7yFrwoE";
  return `${baseUrl}?center=${latLng}&zoom=${zoom}&size=${widthCrossHeight}&language=fr&key=${key}&maptype=roadmap&markers=icon:https://storage.googleapis.com/hk-roosongo-sandbox-uploads/roosongo-stg/roosongo_map_pin_64x64_6715937880/roosongo_map_pin_64x64_6715937880.png?updated_at=2022-09-10T15:47:44.975Z|${latLng}&style=feature:road%7Celement:labels%7Cvisibility:off`;
};

export const PropertyLocation = () => {
  const property = useProperty();
  const url = getStaticMapSrc({
    latLng: `${property?.coordinates?.lat},${property?.coordinates?.lng}`,
    zoom: 16,
  });
  return (
    <div>
      <h3 className="mb-8 text-2xl md:text-3xl">Situation du logement</h3>
      <img className="w-full" src={url} alt="Property location" />
    </div>
  );
};
