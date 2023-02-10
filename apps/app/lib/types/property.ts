import { LatLng } from "./geo";

export type ImageFormat = "large" | "small" | "medium" | "thumbnail";

export interface MediaImage {
  formats: {
    [format in ImageFormat]: { url: string };
  };
  url: string;
  id: number;
}

export interface PropertyContact {
  fullname: string;
  email?: string;
  phoneNumber: string;
  id: number;
}

export interface Property {
  id: number;
  pricePerDay: number;
  pricePerMonth: number;
  priceForSale: number;
  title: string;
  slug: string;
  description?: string;
  availableAt?: Date;
  photos?: MediaImage[];
  nbBedrooms?: number;
  nbUnits?: number;
  agency?: any;
  location?: {
    latitude: number;
    longitude: number;
  };
  keywords?: string;
  amenities?: string[]
}
