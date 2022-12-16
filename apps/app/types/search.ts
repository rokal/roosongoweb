import { Geo, LatLng } from "./geo";

export interface SearchParams {
  geo: Geo;
  pos?: LatLng;
  beds?: number;
  privateBath?: boolean;
  excludedIds?: number[];
}
