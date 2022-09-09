import { getFullFlagImage } from "../../../../utils/ImageDetails";
import "./RegionHeader.css";

const RegionHeader = ({ region }) => {
  return (
    <div className="d-flex flex-row region-header">
      <img
        src={getFullFlagImage(region.country.flagUrl)}
        className="mb-1 image"
        alt={region.name}
      />
      <div className="ms-3 mt-3 label">{region.name}</div>
      <div className="ms-auto me-2 mt-3 label">{region.country.name}</div>
    </div>
  );
};

export default RegionHeader;
