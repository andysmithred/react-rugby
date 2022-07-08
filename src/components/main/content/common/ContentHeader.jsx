import Icon from "../../../utils/Icon";
import "./ContentHeader.css";

const ContentHeader = ({ category }) => {
  return (
    <div className="content-header">
      <Icon icon={category.icon} style={{ color: "white", size: "40px" }} />
      <div className="label">{category.name.toUpperCase()}</div>
    </div>
  );
};

export default ContentHeader;
