import DetailsHeader from "../../common/DetailsHeader";
import MapContainer from "../../common/maps/MapContainer";

import "./CityMap.css";

const CityMap = ({ city, icon, label }) => {
  return (
    <div className="pt-1 me-1 city-map">
        <DetailsHeader icon={icon} label={label} />
        <MapContainer latitude={city.latitude} longitude={city.longitude} zoom={city.zoom} />
    </div>
  );
};

export default CityMap;
