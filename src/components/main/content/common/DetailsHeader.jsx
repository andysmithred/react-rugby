import "./DetailsHeader.css";

const DetailsHeader = ({ icon, label }) => (
  <div className="d-flex flex-row details-header">
    <div className="ms-1">
      <img src={icon} className="image" alt={label} />
    </div>
    <div className="ms-2 label">{label.toUpperCase()}</div>
  </div>
);

export default DetailsHeader;
