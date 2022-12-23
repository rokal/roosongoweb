export enum LocationTypeEnum {
  ROOFTOP = "ROOFTOP",
  RANGE_INTERPOLATED = "RANGE_INTERPOLATED",
  GEOMETRIC_CENTER = "GEOMETRIC_CENTER",
  APPROXIMATE = "APPROXIMATE",
}

export interface LatLng {
  lat: number;
  lng: number;
}

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface Geometry {
  bounds: {
    northeast: LatLng;
    southwest: LatLng;
  };
  location: LatLng;
  viewport: {
    northeast: LatLng;
    southwest: LatLng;
  };
  location_type: LocationTypeEnum;
}

export interface Geo {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types: string[];
}

export interface AlgoliaQueryParams {
  aroundRadius?: number;
  aroundLatLng?: string;
  insideBoundingBox?: number[][];
}
