import { getFullFlagImage } from "../../../../utils/ImageDetails";
import "./CityHeader.css";

const CityHeader = ({city}) => {
  return (
    <div className="d-flex flex-row city-header">
      <img
        src={getFullFlagImage(city.region.flagUrl)}
        className="mb-1 image"
        alt={city.region.name}
      />
      <div className="ms-3 mt-3 label">{city.name}</div>
      <div className="ms-auto me-2 mt-3 label">{city.region.name}</div>
    </div>
  );
};

export default CityHeader;
