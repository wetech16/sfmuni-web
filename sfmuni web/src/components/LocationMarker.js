import { Icon } from "@iconify/react";
import Avatar from "@material-ui/core/Avatar";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Avatar className="location-icon">8</Avatar>
    </div>
  );
};

export default LocationMarker;
