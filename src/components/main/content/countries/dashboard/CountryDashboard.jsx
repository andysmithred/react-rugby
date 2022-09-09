import { useSelector } from "react-redux";
import CountryHeader from "./CountryHeader";

// import RegionHeader from "./RegionHeader";
// import RegionDetails from "./RegionDetails";
// import CityDetails from "./CityDetails";
// import CityHeader from "./CityHeader";
// import CityMap from "./CityMap";

import "./CountryDashboard.css";


const CountryDashboard = () => {
  const fetching = useSelector((state) => state.countries.fetchingSelected);
  const country = useSelector((state) => state.countries.selected);

  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (country) {
    return (
      <div className="pt-1 ps-1 country-dashboard">
        <CountryHeader country={country} />

        {/* <PlaceLinks /> */}
        {/* <div className="row">
          <div className="col-lg-8">
            MAP
          </div>
          <div className="col-lg-4">
            <RegionDetails region={region} />
          </div>
        </div> */}
      </div>
    );
  } else {
    return <div className="country-dashboard">No country found</div>;
  }
};

export default CountryDashboard;
