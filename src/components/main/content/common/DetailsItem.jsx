import "./DetailsItem.css";

const DetailsItem = ({label, value}) => (
  <div className="details-item">
    <div className="label">{label.toUpperCase()}</div>
    <div className="value">{value}</div>
  </div>
);

export default DetailsItem;
