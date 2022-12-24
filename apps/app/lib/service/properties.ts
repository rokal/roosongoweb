import axios from "axios";
import { SearchParams } from "@lib/types/search";
import { SearchResponse } from "@lib/types/searchResponse";

export const searchProperties = async (searchParams: SearchParams) => {
  const res = await axios.post(
    `http${process.env.LOCAL_ENV ? '' : 's'}://${process.env.VERCEL_URL}/api/search`,
    searchParams
  );
  const searchResult: SearchResponse = res.data?.results;
  return searchResult;
};
