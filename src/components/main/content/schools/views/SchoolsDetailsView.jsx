import SchoolsHeader from "../header/SchoolsHeader";
import SchoolsList from "../list/SchoolsList";
import SchoolDashboard from "../dashboard/SchoolDashboard";

import "../../Content.css";

const SchoolsDetailsView = () => {
  return (
    <div className="d-flex flex-column content-view">
      <SchoolsHeader menu_items={["Index", "Edit", "Delete"]} />

      <div className="d-flex flex-row content-view-content">
        <SchoolsList />
        <SchoolDashboard />
      </div>
    </div>
  );
};

export default SchoolsDetailsView;
