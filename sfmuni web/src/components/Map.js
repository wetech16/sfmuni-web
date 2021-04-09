import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import SelfMarker from "./SelfLocation";

// define constants
const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom, mapId }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((data, index) => {
    return data.vehicle?.map((i) => {
      return (
        <LocationMarker
          key={i.$.id}
          lat={i.$.lat}
          lng={i.$.lon}
          onClick={() =>
            setLocationInfo({
              id: i.$.routeTag,
              speed: i.$.speedKmHr,
            })
          }
        />
      );
    });
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.MAP,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        defaultMapid={mapId}
      >
        {markers}
        <SelfMarker lat={37.725751} lng={-122.4035638} />
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 37.7281315,
    lng: -122.4019911,
  },
  zoom: 15,
  mapId: "77f0beeb034fb45c",
};

export default Map;
