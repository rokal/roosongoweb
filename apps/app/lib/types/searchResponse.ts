interface ApiResponseMetaPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
interface ApiResponseMeta {
  pagination: ApiResponseMetaPagination;
}

export interface SearchProperty {
  objectID: string;
  pricePerDay: number;
  pricePerMonth?: number;
  priceForSale?: number;
  title: string;
  slug: string;
  description?: string;
  availableAt?: Date;
  nbBedrooms?: number;
  nbUnits?: number;
  _geoloc?: {
    lat: number;
    lng: number;
  };
  photos?: string[];
  amenities?: string[]
}

export interface ApiResponse<T extends { id?: number }> {
  attributes: T;
  meta: ApiResponseMeta;
}

export interface SearchResponse {
  hits: SearchProperty[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
}
