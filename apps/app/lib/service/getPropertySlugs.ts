import axios from "axios";

export const getPropertySlugs = async (): Promise<string[]> => {
  const res = await axios.get(
    `${process.env.VERCEL_URL}/api/propertySlugs`
  );
  return res.data?.results;
};
