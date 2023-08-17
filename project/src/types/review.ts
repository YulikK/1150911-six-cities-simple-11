export type ReviewType = {
  id: number;
  offerId: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
};
type User = {
  id: number;
  isPro: boolean;
  name: string;
  avatarUrl: string;
};
