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
  price: number;
  title: string;
  slug: string;
  description?: string;
  availableAt?: Date;
  images?: MediaImage[];
  coverImage: MediaImage;
  imageUrl: string;
  privateBathroom?: boolean;
  privateToilet?: boolean;
  unifamilial?: boolean;
  privateKitchen?: boolean;
  nbBedrooms?: number;
  nbNeighboors?: number;
  agency?: any;
  coordinates?: LatLng;
  keywords: string;
}
