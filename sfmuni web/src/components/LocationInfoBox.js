const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Bus Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          SPEED: <strong>{info.speed}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
