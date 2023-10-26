import { CityType } from '../../types/Offer';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeLocation } from '../../store/action';

type LocationProps = {
  locations: CityType[];
}

function Locations({ locations }: LocationProps): JSX.Element {
  const activeLocation = useAppSelector((state) => state.activeLocation);
  const dispatch = useAppDispatch();

  const changeActiveLocation = (city: CityType) => {
    dispatch(changeLocation({ newLocation: city }));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((city) => (
            <li key={city.name} className="locations__item">
              <a
                className={classNames(
                  'locations__item-link',
                  'tabs__item',
                  { 'tabs__item--active': activeLocation === city })}
                href="/"
                onClick={(evt) => {
                  evt.preventDefault();
                  changeActiveLocation(city);
                }}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Locations;
