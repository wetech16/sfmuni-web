import { Icon } from "@iconify/react";
import Avatar from "@material-ui/core/Avatar";

const selfMarker = ({ lat, lng }) => {
  return (
    <div className="location-marker">
      <Avatar className="location-icon">Me</Avatar>
    </div>
  );
};

export default selfMarker;
