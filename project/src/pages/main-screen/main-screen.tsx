import { useState } from 'react';
import Locations from '../../components/locations/locations';
import { OfferType, CityType } from '../../types/Offer';
import { LOCATIONS } from '../../const/const';
import OffersList from '../../components/offers-list/offers-list';

type MainScreenProps = {
  cardsCount: number;
  offers: OfferType[];
}

function MainScreen({cardsCount, offers}: MainScreenProps) : JSX.Element {

  const [activeLocation, setActiveLocation] = useState<CityType>(LOCATIONS[0]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations activeLocation={activeLocation} setActiveLocation={setActiveLocation}/>
      <OffersList offers={offers} cardsCount={cardsCount} activeLocation={activeLocation}/>
    </main>
  );
}

export default MainScreen;
