import CountriesHeader from "../header/CountriesHeader";
import CountriesList from "../list/CountriesList";
import CountryDashboard from "../dashboard/CountryDashboard";
import "./CountriesViews.css";

const CountriesDetailsView = () => {
  return (
    <div className="d-flex flex-column country-view">
        <CountriesHeader menu_items={["Index", "Edit", "Delete"]} />
      <div className="d-flex flex-row country-view-content">
        <CountriesList />
        <CountryDashboard />
        
        {/* <CitiesDashboard /> */}
      </div>
    </div>
  );
};

export default CountriesDetailsView;
