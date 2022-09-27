import SchoolTypesHeader from "../header/SchoolTypesHeader";
import SchoolTypesList from "../list/SchoolTypesList";
import SchoolTypeDashboard from "../dashboard/SchoolTypeDashboard";

import "../../Content.css";

const SchoolTypesDetailsView = () => {
  return (
    <div className="d-flex flex-column content-view">
      <SchoolTypesHeader menu_items={["Index", "Edit", "Delete"]} />

      <div className="d-flex flex-row content-view-content">
        <SchoolTypesList />
        <SchoolTypeDashboard />
      </div>
    </div>
  );
};

export default SchoolTypesDetailsView;
