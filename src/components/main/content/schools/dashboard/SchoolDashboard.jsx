import { useSelector } from "react-redux";
import SchoolDetails from "./SchoolDetails";
import SchoolHeader from "./SchoolHeader";

import "./SchoolDashboard.css";

const SchoolDashboard = () => {
  const fetching = useSelector((state) => state.schools.fetchingSelected);
  const school = useSelector((state) => state.schools.selected);

  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (school) {
    return (
      <div className="pt-1 ps-1 school-dashboard">
        <SchoolHeader school={school} />
        <div className="row">
          <div className="col-lg-8">
            MAP
            {/* <CityMap
              city={city}
              label="Map"
              icon={getFullPathImage("world-map")}
            /> */}
          </div>
          <div className="col-lg-4">
            <SchoolDetails school={school} />
            {/* <CityDetails city={city} /> */}
            {/* <PlaceDetails item={item} />
            <Weather weather={item.weather} />
            <Time weather={item.weather} /> */}
          </div>
          {/* <div className="col-lg-1" style={{"border": "solid 2px red"}}></div> */}
        </div>
      </div>
    );
  } else {
    return <div className="school-dashboard">No school found</div>;
  }
};

export default SchoolDashboard;
