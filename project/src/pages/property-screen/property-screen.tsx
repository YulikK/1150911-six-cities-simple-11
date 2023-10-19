import Rating from '../../components/rating/Rating';
import { offers } from '../../mocks/offers';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Price from '../../components/price/price';
import Goods from '../../components/goods/goods';
import Features from '../features/features';
import Host from '../../components/host/host';
import Reviews from '../../components/reviews/reviews';
import NearOffers from '../../components/near-offers/near-offers';
import {Map} from '../../components/map/map';


function PropertyScreen(): JSX.Element {
  const {id} = useParams();
  const currentOffer = offers.find((offer) => offer.id === Number(id));
  const nearOffers = offers.filter((offer) => offer.id !== Number(id));

  return currentOffer
    ? (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.images && currentOffer.images.map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img
                    className="property__image"
                    src={image}
                    alt="Photostudio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
              </div>
              <Rating rating={currentOffer.rating} className='property'/>
              <Features offer={currentOffer}/>
              <Price price={currentOffer.price} isShort={false}/>
              <Goods offer={currentOffer}/>
              <Host offer={currentOffer}/>
              <Reviews offer={currentOffer}/>
            </div>
          </div>
          <Map
            city={currentOffer.city}
            points={nearOffers}
            currentOffer={currentOffer}
            classParents='property__map'
          />
        </section>
        <NearOffers nearOffers={nearOffers} currentOffer={currentOffer}/>
      </main>
    )
    : (
      <NotFoundScreen/>
    );
}

export default PropertyScreen;
