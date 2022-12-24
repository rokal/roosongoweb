import axios from "axios";

export const getPropertySlugs = async (): Promise<string[]> => {
  const res = await axios.get(
    `http${process.env.LOCAL_ENV ? '' : 's'}://${process.env.VERCEL_URL}/api/propertySlugs`
  );
  return res.data?.results;
};
