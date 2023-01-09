import "./ItemHeader.css";

const ItemHeader = ({ label, category }) => {
  return (
    <div className="d-flex flex-row item-header">
      <img src={category.icon} className="image" alt={category.name} />
      <div className="ms-3 mt-3 label">{label}</div>
    </div>
  );
};

export default ItemHeader;
