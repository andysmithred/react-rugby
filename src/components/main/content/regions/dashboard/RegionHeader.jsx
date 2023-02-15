import { getFullFlagImage } from "../../../../utils/ImageDetails";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import "./RegionHeader.css";

const RegionHeader = ({ region }) => {

  let icon = undefined;
  let label = undefined;

  if (region.complete) {
    icon = getFullPathImage("lock");
    label = "locked";
  } else {
    icon = getFullPathImage("unlock");
    label = "unlocked";
  }

  return (
    <div className="d-flex flex-row region-header">
      <img
        src={getFullFlagImage(region.country.flagUrl)}
        className="mb-1 image"
        alt={region.name}
      />
      <div className="ms-3 mt-3 label">{region.name}</div>
      {/* <div className="ms-auto me-2 mt-3 label">{region.country.name}</div> */}
      <img
        src={icon}
        className="ms-auto me-2 mt-3 complete"
        alt={label}
      />
    </div>
  );
};

export default RegionHeader;
