import { AlgoliaQueryParams, Geo, LocationTypeEnum } from "@lib/types/geo";

const EXPANDED_RADIUS = 2000; // in meters = 2km

const getBBox = (geo: Geo) => {
  const northeast = geo?.geometry?.bounds?.northeast;
  const southwest = geo?.geometry?.bounds?.southwest;
  if (!northeast || !southwest) return;
  const boundingBox = [
    northeast?.lat,
    northeast?.lng,
    southwest?.lat,
    southwest?.lng,
  ];
  return boundingBox;
};

const getAroundLatLng = (geo: Geo) => {
  const aroundLatLng = [
    geo.geometry.location.lat,
    geo.geometry.location.lng,
  ].join(", ");
  return aroundLatLng;
};

export const addGeo = (query: AlgoliaQueryParams, geo: Geo) => {
  const bbox = getBBox(geo);
  const isSinglePoint = [
    LocationTypeEnum.GEOMETRIC_CENTER,
    LocationTypeEnum.ROOFTOP,
  ].includes(geo.geometry.location_type);
  if (!bbox || isSinglePoint) {
    query.aroundRadius = EXPANDED_RADIUS;
    query.aroundLatLng = getAroundLatLng(geo);
  } else {
    query.insideBoundingBox = [bbox];
  }
};
