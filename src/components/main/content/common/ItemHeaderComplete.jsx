import { getFullPathImage } from "../../../utils/ImageDetails";
import "./ItemHeaderComplete.css";

const ItemHeaderComplete = ({ label, category, complete }) => {
  let icon = undefined;
  let iconLabel = undefined;

  if (complete) {
    icon = getFullPathImage("lock");
    iconLabel = "locked";
  } else {
    icon = getFullPathImage("unlock");
    iconLabel = "unlocked";
  }

  return (
    <div className="d-flex flex-row item-header-complete">
      <img src={category.icon} className="image" alt={category.name} />
      <div className="ms-3 mt-2 label">{label}</div>
      <img
        src={icon}
        className="ms-auto me-2 mt-3 complete"
        alt={iconLabel}
      />
    </div>
  );
};

export default ItemHeaderComplete;
