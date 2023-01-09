// import SchoolsHeader from "../header/SchoolsHeader";
// import SchoolsList from "../list/SchoolsList";
// import SchoolDashboard from "../dashboard/SchoolDashboard";

import CoachesHeader from "../header/CoachesHeader";
import CoachesList from "../list/CoachesList";
import CoachDashboard from "../dashboard/CoachDashboard";

import "../../Content.css";

const CoachesDetailsView = () => {
  return (
    <div className="d-flex flex-column content-view">
      <CoachesHeader menu_items={["Index", "Edit", "Delete"]} />

      <div className="d-flex flex-row content-view-content">
        <CoachesList />
        <CoachDashboard />
      </div>
    </div>
  );
};

export default CoachesDetailsView;
