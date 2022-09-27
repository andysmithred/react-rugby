import { useSelector } from "react-redux";
import SchoolTypesHeader from "../header/SchoolTypesHeader";
import SchoolTypesGrid from "../grid/SchoolTypesGrid";
import "../../Content.css";

const SchoolTypesIndexView = () => {
  const schoolTypes = useSelector((state) => state.schoolTypes.items);
  return (
    <div className="d-flex flex-column content-view">
        <SchoolTypesHeader menu_items={["Details", "New"]} />
        <SchoolTypesGrid schoolTypes={schoolTypes} />
    </div>
  );
};

export default SchoolTypesIndexView;
