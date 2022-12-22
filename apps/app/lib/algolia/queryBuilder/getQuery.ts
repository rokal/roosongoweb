import { AlgoliaQueryParams } from "@lib/types/geo";
import { SearchParams } from "@lib/types/search";
import { addGeo } from "./boundingBox";

export const getQuery = ({ geo }: SearchParams): AlgoliaQueryParams => {
  const query: AlgoliaQueryParams = {};
  addGeo(query, geo);
  return query;
};
