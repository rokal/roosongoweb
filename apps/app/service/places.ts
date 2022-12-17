import axios from "axios";
import { GOOGLE_MAP_KEY } from "../constants";
import { Geo } from "types/geo";

export const getGeoFromAddress = async (address: string) => {
  const encodedAddress = encodeURI(address);
  const geocodePath = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_MAP_KEY}`;
  try {
    const response = await axios.post(geocodePath);
    const apiResponse = response.data;
    const geo: Geo = apiResponse.results?.[0];
    return geo;
  } catch (error) {
    console.log(error);
    return null;
  }
};
