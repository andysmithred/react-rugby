import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CountryHeader from "./CountryHeader";
import CountryDetails from "./CountryDetails";
import RegionsDetailsList from "../../regions/list/RegionsDetailsList";
import TeamsDetailsList from "../../teams/list/TeamsDetailsList";
import { fetchCountry } from "../../../../reducers/countries/countriesSlice";

import "./CountryDashboard.css";


const CountryDashboard = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.items);
  const fetching = useSelector((state) => state.countries.fetchingItem);
  const country = useSelector((state) => state.countries.item);

  useEffect(() => {
    if ((!fetching) && (countries.length > 0) && (!country)) {
      dispatch(fetchCountry(countries[0].countryId));
    }
  }, [dispatch, fetching, countries, country]);

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
