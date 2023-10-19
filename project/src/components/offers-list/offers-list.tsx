import { OfferType, CityType } from '../../types/Offer';
import Offer from '../offer/offer';
import Sort from '../sorting/sorting';
import {Map} from '../map/map';
import { useState } from 'react';

type OffersListProps = {
  cardsCount: number;
  offers: OfferType[];
  activeLocation: CityType;
}
function OffersList({offers, cardsCount, activeLocation}: OffersListProps):JSX.Element {
  const [currentOffer, setCurrentOffer] = useState<OfferType | null>(null);

  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{cardsCount} places to stay in {activeLocation.name}</b>
          <Sort/>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <Offer
                key={offer.id}
                className='cities'
                offer={offer}
                currentOffer={currentOffer}
                setCurrentOffer={setCurrentOffer}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map
            city={activeLocation}
            points={offers}
            currentOffer={currentOffer}
          />
        </div>
      </div>
    </div>
  );
}

export default OffersList;
