import "./IconBarItem.css";

const IconBarItem = ({ category, onIconBarItemClick }) => (
  <div className="icon-bar-item" onClick={() => onIconBarItemClick(category)}>
    <img
      src={category.icon}
      className="image mt-1"
      alt={category.name}
    />
  </div>
);

export default IconBarItem;
