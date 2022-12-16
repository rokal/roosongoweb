import { AlgoliaQueryParams } from "types/geo";
import { SearchParams } from "types/search";
import { addGeo } from "./boundingBox";

export const getQuery = ({ geo }: SearchParams): AlgoliaQueryParams => {
  const query: AlgoliaQueryParams = {};
  addGeo(query, geo);
  return query;
};
