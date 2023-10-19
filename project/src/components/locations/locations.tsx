import { LOCATIONS } from '../../const/const';
import { CityType } from '../../types/Offer';
import classNames from 'classnames';

type LocationsProps = {
  activeLocation: CityType;
  setActiveLocation: (value: CityType) => void;
}

function Locations({activeLocation, setActiveLocation}: LocationsProps): JSX.Element {


  const changeActiveLocation = (city: CityType) => {
    setActiveLocation(city);
  };

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {LOCATIONS.map((city) =>
            (
              <li key={city.name} className="locations__item">
                <a
                  className={classNames(
                    'locations__item-link',
                    'tabs__item',
                    {'tabs__item--active': activeLocation === city})}
                  href="/"
                  onClick={(evt) =>{
                    evt.preventDefault();
                    changeActiveLocation(city);
                  }}
                >
                  <span>{city.name}</span>
                </a>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}

export default Locations;
