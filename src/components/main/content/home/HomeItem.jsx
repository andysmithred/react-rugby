import Icon from "../../../utils/Icon";
import "./HomeItem.css";

const HomeItem = (props) => {
  return (
    <div
      className="home-item"
      onClick={() => props.handleItemClick(props.category)}
    >
      <div>
        <Icon icon={props.category.icon} style={{ color: "white", size: "30px" }} />
      </div>
      <div className="label">{props.category.name.toUpperCase()}</div>
      <div className="value">{props.value}</div>
    </div>
  );
};

export default HomeItem;
