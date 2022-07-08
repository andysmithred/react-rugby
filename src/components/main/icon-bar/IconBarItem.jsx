import Icon from "../../utils/Icon";
import "./IconBarItem.css";

const IconBarItem = ({ category, onIconBarItemClick }) => (
  <div className="icon-bar-item" onClick={() => onIconBarItemClick(category)}>
    <Icon icon={category.icon} style={{ color: "white", size: "20px" }} />
  </div>
);

export default IconBarItem;
