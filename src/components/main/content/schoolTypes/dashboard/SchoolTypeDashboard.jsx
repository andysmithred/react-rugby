import { useSelector } from "react-redux";

// import { useEffect } from "react";
// import { fetchCity } from "../../../../reducers/cities/citiesSlice";

// import "./RegionDashboard.css";
import SchoolTypeHeader from "./SchoolTypeHeader";
// import CityDetails from "./CityDetails";
// import CityHeader from "./CityHeader";
// import CityMap from "./CityMap";

import SchoolTypesGrid from "../grid/SchoolTypesGrid";

import "./SchoolTypeDashboard.css";

const SchoolTypeDashboard = () => {
  const fetching = useSelector((state) => state.schoolTypes.fetchingSelected);
  const schoolType = useSelector((state) => state.schoolTypes.selected);

  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (schoolType) {
    return (
      <div className="pt-1 ps-1 school-type-dashboard">
        <SchoolTypeHeader schoolType={schoolType} />
        List of schools for the School Type
      </div>
    );
  } else {
    return <div className="school-type-dashboard">No school type found</div>;
  }
};

export default SchoolTypeDashboard;
