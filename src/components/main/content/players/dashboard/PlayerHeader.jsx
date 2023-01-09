import { getFullFlagImage } from "../../../../utils/ImageDetails";
import "./PlayerHeader.css";

const PlayerHeader = ({ item }) => {
  return (
    <div className="d-flex flex-row player-header">
      {item.city && (
        <img
          src={getFullFlagImage(item.city.flagUrl)}
          className="mb-1 image"
          alt={item.name}
        />
      )}
      <div className="ms-3 mt-3 label">{item.name}</div>
    </div>
  );
};

export default PlayerHeader;
