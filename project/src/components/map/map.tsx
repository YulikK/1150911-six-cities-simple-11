import { useEffect, useRef } from 'react';
import { CityType, OfferType } from '../../types/Offer';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const/const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import classNames from 'classnames';

type MapProps = {
  city: CityType;
  points: OfferType[];
  currentOffer: OfferType | null;
  classParents: string;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

function Map({city, points, currentOffer, classParents}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet.layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new leaflet.Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            currentOffer !== undefined && point === currentOffer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, currentOffer]);

  return(
    <section
      className={classNames(classParents,'map')}
      ref={mapRef}
    />
  );
}

export {Map};
