import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { CityType } from '../types/Offer';
import { Map } from 'leaflet';
import leaflet from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<CityType | null>(null);

  useEffect(() => {

    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);

      isRenderedRef.current = city;

      return() => {
        if(isRenderedRef && map !== null){
          map.remove();
        }
      };
    }

    if (isRenderedRef.current !== city) {

      map?.setView(
        {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        city.location.zoom);

      isRenderedRef.current = city;
    }

  }, [mapRef, city, map]);
  return map;
}

export default useMap;
