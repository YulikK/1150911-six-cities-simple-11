import { OfferType } from '../../types/Offer';
import Offer from '../offer/offer';
import Sort from '../sorting/sorting';
import { Map } from '../map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

function OffersList(): JSX.Element {
  const activeLocation = useAppSelector((state) => state.activeLocation);
  const cityOffers = useAppSelector((state) => state.cityOffers);
  const offersCount = cityOffers.length ? cityOffers.length - 1 : 0;
  const [currentOffer, setCurrentOffer] = useState<OfferType | null>(null);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersCount} places to stay in {activeLocation.name}</b>
          <Sort />
          <div className="cities__places-list places__list tabs__content">
            {cityOffers.map((offer) => (
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
            points={cityOffers}
            currentOffer={currentOffer}
            classParents='cities__map'
          />
        </div>
      </div>
    </div>
  );
}

export default OffersList;
