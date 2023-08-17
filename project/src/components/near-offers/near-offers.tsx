import { offers } from '../../mocks/offers';
import { OfferType } from '../../types/Offer';
import Offer from '../offer/offer';

type NearOffersProps ={
  currentOffer: OfferType;
}

function NearOffers({currentOffer}: NearOffersProps):JSX.Element{
  const nearOffers = offers.filter((offer) => offer.id !== currentOffer.id);
  if(nearOffers.length > 3) {
    nearOffers.slice(0, 2);
  }
  function testF (value: OfferType | null ):void {
    value = null;
  }

  return nearOffers && (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {nearOffers.map((nearOffer) => (
            <Offer
              key={nearOffer.id}
              className='near-places'
              offer={nearOffer}
              currentOffer={currentOffer}
              setCurrentOffer={testF}
            />
          ))}
        </div>
      </section>
    </div>);
}

export default NearOffers;
