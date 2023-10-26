import { CityType, OfferType } from './types/Offer';
import { offers } from './mocks/offers';
import { Sort } from './const/const';

export const getCityOffers = (activeLocation: CityType): OfferType[] => offers.filter((offer: OfferType) =>
  offer.city.name === activeLocation.name
);

export const getSortedOffers = (offersCity: OfferType[], sortType: Sort, activeLocation: CityType): OfferType[] => {
  switch (sortType) {
    case Sort.POPULAR: {
      return getCityOffers(activeLocation);
    }
    case Sort.PRICE_LH: {
      return offersCity.sort((offer1, offer2) => offer1.price - offer2.price);
    }
    case Sort.PRICE_HL: {
      return offersCity.sort((offer1, offer2) => offer2.price - offer1.price);
    }
    case Sort.RATING: {
      return offersCity.sort((offer1, offer2) => offer2.rating - offer1.rating);
    }
    default: {
      return offersCity;
    }
  }
};
