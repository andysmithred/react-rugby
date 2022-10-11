import { useSelector } from "react-redux";
import SchoolsHeader from "../header/SchoolsHeader";
import SchoolsGrid from "../grid/SchoolsGrid";

import "../../Content.css";

const SchoolsIndexView = () => {
  const schools = useSelector((state) => state.schools.items);
  return (
    <div className="d-flex flex-column content-view">
      <SchoolsHeader menu_items={["Details", "New"]} />
      <SchoolsGrid items={schools} />
    </div>
  );
};

export default SchoolsIndexView;
