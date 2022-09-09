import "./HomeItem.css";

const HomeItem = ({ category, value, handleItemClick }) => {
  return (
    <div
      className="d-flex flex-row p-2 home-item"
      onClick={() => handleItemClick(category)}
    >
      <img src={category.icon} className="mt-1 image" alt={category.name} />
      <div className="ms-3 label">{category.name.toUpperCase()}</div>
      <div className="ms-auto me-5 value">{value}</div>
    </div>
  );
};

export default HomeItem;
