
// import CitiesDashboard from "../dashboard/CitiesDashboard";
import "./RegionsViews.css";
import RegionsHeader from "../header/RegionsHeader";
import RegionsList from "../list/RegionsList";
import RegionDashboard from "../dashboard/RegionDashboard";

const RegionsDetailsView = () => {
  return (
    <div className="d-flex flex-column region-view">
      <RegionsHeader menu_items={["Index", "Edit", "Delete"]} />
      <div className="d-flex flex-row region-view-content">
        <RegionsList />
        <RegionDashboard />
      </div>
    </div>
  );
};

export default RegionsDetailsView;
