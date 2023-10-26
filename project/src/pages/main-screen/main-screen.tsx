import Locations from '../../components/locations/locations';
import OffersList from '../../components/offers-list/offers-list';
import { LOCATIONS } from '../../const/const';

function MainScreen(): JSX.Element {

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations locations={LOCATIONS} />
      <OffersList />
    </main>
  );
}

export default MainScreen;
