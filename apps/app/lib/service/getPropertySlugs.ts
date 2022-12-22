import axios from "axios";

export const getPropertySlugs = async (): Promise<string[]> => {
  const res = await axios.get(
    `${process.env.ROOSONGO_WEB_URL}/api/propertySlugs`
  );
  return res.data?.results;
};
