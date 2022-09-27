import { useSelector } from "react-redux";
import "./SchoolTypeHeader.css";

const SchoolTypeHeader = ({ schoolType }) => {
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "SchoolTypes")
  );

  return (
    <div className="d-flex flex-row school-type-header">
      <img src={category.icon} className="image" alt={category.name} />
      <div className="ms-3 mt-3 label">{schoolType.type}</div>
    </div>
  );
};

export default SchoolTypeHeader;
