import axios from "axios";
import { SearchParams } from "types/search";
import { SearchResponse } from "types/searchResponse";

export const searchProperties = async (searchParams: SearchParams) => {
  const res = await axios.post(
    "http://localhost:3000/api/search",
    searchParams
  );
  const searchResult: SearchResponse = res.data?.results;
  return searchResult;
};
