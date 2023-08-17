export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;

export enum Sort {
  POPULAR = 'Popular',
  PRICE_LH = 'Price: low to high',
  PRICE_HL = 'Price: high to low',
  RATING = 'Top rated first'
}

export enum AppRoute {
  Login = '/login',
  Room = '/offer',
  Root = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
