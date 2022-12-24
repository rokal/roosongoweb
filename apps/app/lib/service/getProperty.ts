import axios from "axios";
import { Property } from "../types/property";

export const getProperty = async (slug: string): Promise<Property> => {
  const res = await axios.get(
    `${process.env.ROOSONGO_CLIENT_API_HOST}/api/properties/${slug}`
  );
  return res.data?.property;
};
