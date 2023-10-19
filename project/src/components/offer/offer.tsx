import { Link, generatePath } from 'react-router-dom';
import { OfferType } from '../../types/Offer';
import Rating from '../rating/Rating';
import { MouseEvent } from 'react';
import { AppRoute } from '../../const/const';
import Price from '../price/price';
import classNames from 'classnames';

type OfferProps = {
  className: string;
  offer: OfferType;
  currentOffer: OfferType | null;
  setCurrentOffer: (value: OfferType | null) => void;
};

function Offer({className, offer, currentOffer, setCurrentOffer}:OfferProps): JSX.Element {

  return(
    <article
      className={classNames(
        `${className}__card`,
        'place-card',
        {'active': offer === currentOffer})}
      onMouseEnter={(event: MouseEvent<HTMLElement>) =>
        setCurrentOffer(offer)}
      onMouseLeave={(event: MouseEvent<HTMLElement>) =>
        setCurrentOffer(null)}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={classNames(`${className}__image-wrapper`, 'place-card__image-wrapper')}>
        <Link to={{pathname: generatePath(`${AppRoute.Room}/:id`, {id: offer.id.toString()})}}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="{260}"
            height="{200}"
            alt={offer.description}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <Price price={offer.price} isShort/>
        </div>
        <Rating rating={offer.rating} className='place-card'/>
        <h2 className="place-card__name">
          <a href="/">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Offer;
