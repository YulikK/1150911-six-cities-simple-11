import { OfferType } from '../../types/Offer';

type FeaturesProps ={
  offer: OfferType;
}
function Features({offer}: FeaturesProps):JSX.Element{

  function capitalizeFirstLetter(value: string){
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return(
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {capitalizeFirstLetter(offer.type)}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {offer.bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {offer.maxAdults} adults
      </li>
    </ul>
  );
}

export default Features;
