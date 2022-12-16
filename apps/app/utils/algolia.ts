import { Geo } from "types/geo";

const algoliasearch = require("algoliasearch/lite");

export const getClient = (key: string, secret: string) => {
  const client = algoliasearch(key, secret);
  const algoliaPropertiesIndex = client.initIndex("properties");
  return algoliaPropertiesIndex;
};

export const getBBox = (geo: Geo) => {
  const northeast = geo?.geometry?.bounds?.northeast;
  const southwest = geo.geometry?.bounds?.southwest;
  if (!northeast || !southwest) return;
  const boundingBox = [
    northeast?.lat,
    northeast?.lng,
    southwest?.lat,
    southwest?.lng,
  ];
  return boundingBox;
};

export const getAroundLatLng = (geo: Geo) => {
  const aroundLatLng = [
    geo.geometry.location.lat,
    geo.geometry.location.lng,
  ].join(", ");
  return aroundLatLng;
};
