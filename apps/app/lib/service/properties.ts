import axios from "axios";
import { SearchParams } from "@lib/types/search";
import { SearchResponse } from "@lib/types/searchResponse";

export const searchProperties = async (searchParams: SearchParams) => {
  const res = await axios.post(
    `${process.env.VERCEL_URL}/api/search`,
    searchParams
  );
  const searchResult: SearchResponse = res.data?.results;
  return searchResult;
};
