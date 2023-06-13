import { getFullFlagImage } from "../../../../utils/ImageDetails";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import "./CoachHeader.css";

const CoachHeader = ({ item }) => {
  let icon = undefined;
  let label = undefined;

  if (item.complete) {
    icon = getFullPathImage("lock");
    label = "locked";
  } else {
    icon = getFullPathImage("unlock");
    label = "unlocked";
  }

  return (
    <div className="d-flex flex-row coach-header">
      <img
        src={getFullFlagImage(item.city.flagUrl)}
        className="mb-1 image"
        alt={item.name}
      />
      <div className="ms-3 mt-3 label">{item.name}</div>
      <img
        src={icon}
        className="ms-auto me-2 mt-3 complete"
        alt={label}
      />
    </div>
  );
};

export default CoachHeader;
