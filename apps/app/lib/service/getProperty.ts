import axios from "axios";
import { Property } from "../types/property";

export const getProperty = async (slug: string): Promise<Property> => {
  const res = await axios.get(
    `http${process.env.LOCAL_ENV ? '' : 's'}://${process.env.VERCEL_URL}/api/properties/${slug}`
  );
  return res.data?.property;
};
