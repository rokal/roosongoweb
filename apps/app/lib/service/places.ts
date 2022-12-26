import { GOOGLE_MAP_KEY } from "../constants";
import { Geo } from "@lib/types/geo";

export const getGeoFromAddress = async (address: string) => {
  const encodedAddress = encodeURI(address);
  const geocodePath = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_MAP_KEY}`;
  try {
    const response = await fetch(geocodePath, { method: 'POST' });
    const apiResponse = await response.json();
    const geo: Geo = apiResponse.results?.[0];
    return geo;
  } catch (error) {
    console.log(error);
    return null;
  }
};
