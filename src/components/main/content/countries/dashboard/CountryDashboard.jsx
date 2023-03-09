import { useSelector } from "react-redux";
import CountryHeader from "./CountryHeader";
import CountryDetails from "./CountryDetails";
import RegionsDetailsList from "../../regions/list/RegionsDetailsList";
import TeamsDetailsList from "../../teams/list/TeamsDetailsList";

import "./CountryDashboard.css";


const CountryDashboard = () => {
  const fetching = useSelector((state) => state.countries.fetchingItems);
  const country = useSelector((state) => state.countries.item);

  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (country) {
    return (
      <div className="pt-1 ps-1 country-dashboard">
        <CountryHeader country={country} />
        <div className="row">
          <div className="col-lg-4">
            <CountryDetails country={country} />
          </div>
          <div className="col-lg-3 regions-dashboard-block">
            <RegionsDetailsList regions={country.regions} />
          </div>
          <div className="col-lg-3 regions-dashboard-block">
            <TeamsDetailsList teams={country.teams} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="country-dashboard">No country found</div>;
  }
};

export default CountryDashboard;
