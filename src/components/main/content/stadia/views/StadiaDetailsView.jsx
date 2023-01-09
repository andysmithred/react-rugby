
import StadiaHeader from "../header/StadiaHeader";
import StadiaList from "../list/StadiaList";
import StadiumDashboard from "../dashboard/StadiumDashboard";

import "../../Content.css";

const StadiaDetailsView = () => {
  return (
    <div className="d-flex flex-column content-view">
      <StadiaHeader menu_items={["Index", "Edit", "Delete"]} />

      <div className="d-flex flex-row content-view-content">
        <StadiaList />
        <StadiumDashboard />
      </div>
    </div>
  );
};

export default StadiaDetailsView;
