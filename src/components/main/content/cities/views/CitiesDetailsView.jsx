import CitiesHeader from "../header/CitiesHeader";
import CitiesList from "../list/CitiesList";
import CitiesDashboard from "../dashboard/CitiesDashboard";
import "./CitiesViews.css";

const CitiesDetailsView = () => {
  return (
    <div className="d-flex flex-column city-view">
      <CitiesHeader menu_items={["Index", "Edit", "Delete"]} />
      <div className="d-flex flex-row city-view-content">
        <CitiesList />
        <CitiesDashboard />
      </div>
    </div>
  );
};

export default CitiesDetailsView;
