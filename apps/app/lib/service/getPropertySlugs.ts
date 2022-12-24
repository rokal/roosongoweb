import axios from "axios";

export const getPropertySlugs = async (): Promise<string[]> => {
  const res = await axios.get(
    `${process.env.ROOSONGO_CLIENT_API_HOST}/api/propertySlugs`
  );
  return res.data?.results;
};
