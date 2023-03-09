import { useSelector } from "react-redux";
import { setCountriesView } from "../../../../reducers/countries/countriesSlice";

import ItemsHeader from "../../common/ItemsHeader";
import CountriesList from "../list/CountriesList";
import CountryDashboard from "../dashboard/CountryDashboard";

import "../../Content.css";

const CountriesDetailsView = () => {
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Countries")
  );

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Index", "New", "Edit", "Delete"]}
        category={category}
        setView={setCountriesView}
      />

      <div className="d-flex flex-row content-view-content">
        <CountriesList />
        <CountryDashboard />
      </div>
    </div>
  );
};

export default CountriesDetailsView;
