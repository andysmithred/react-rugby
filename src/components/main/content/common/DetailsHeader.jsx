import Icon from "../../../utils/Icon";
import "./DetailsHeader.css";

const DetailsHeader = ({ icon, label }) => (
  <div className="details-header">
    <div className="icon">
      <Icon icon={icon} style={{ color: "white", size: "20px" }} />
    </div>
    <div className="label">{label.toUpperCase()}</div>
  </div>
);

export default DetailsHeader;
