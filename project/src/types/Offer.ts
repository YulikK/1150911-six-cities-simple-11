export type OfferType = {
  city: City;
  previewImage: string;
  images?: string[] | null;
  title: string;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods?: string[] | null;
  host: Host;
  description: string;
  location: Location;
  id: number;
};
type City = {
  name: string;
  location: Location;
};
type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};
type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};
