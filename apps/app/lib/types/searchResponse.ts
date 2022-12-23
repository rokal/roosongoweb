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
  price: number;
  title: string;
  slug: string;
  description?: string;
  availableAt?: Date;
  city: string;
  privateBathroom?: boolean;
  privateToilet?: boolean;
  unifamilial?: boolean;
  privateKitchen?: boolean;
  nbBedrooms?: number;
  nbNeighboors?: number;
  _geoloc?: {
    lat: number;
    lng: number;
  };
  imageUrl: string;
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
