import CountriesHeader from "../header/CountriesHeader";
import CountriesGrid from "../index/CountriesGrid";
import "./CountriesViews.css";

const CitiesIndexView = () => {
  return (
    <div className="d-flex flex-column country-view">
      <CountriesHeader menu_items={["Details", "New"]} />
      <CountriesGrid />
    </div>
  );
};

export default CitiesIndexView;
