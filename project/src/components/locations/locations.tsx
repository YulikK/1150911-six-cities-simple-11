import { LOCATIONS } from '../../const/const';

type LocationsProps = {
  activeLocation: string;
  setActiveLocation: (value: string) => void;
}

function Locations({activeLocation, setActiveLocation}: LocationsProps): JSX.Element {


  const changeActiveLocation = (city: string) => {
    setActiveLocation(city);
  };

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {LOCATIONS.map((city) =>
            (
              <li key={city} className="locations__item">
                <a
                  className={activeLocation === city
                    ? 'locations__item-link tabs__item tabs__item--active'
                    : 'locations__item-link tabs__item'}
                  href="/"
                  onClick={(evt) =>{
                    evt.preventDefault();
                    changeActiveLocation(city);
                  }}
                >
                  <span>{city}</span>
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
