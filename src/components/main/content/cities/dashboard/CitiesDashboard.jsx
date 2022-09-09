import { useSelector } from "react-redux";
import { getFullPathImage } from "../../../../utils/ImageDetails";
// import { useEffect } from "react";
// import { fetchCity } from "../../../../reducers/cities/citiesSlice";

import "./CitiesDashboard.css";
import CityDetails from "./CityDetails";
import CityHeader from "./CityHeader";
import CityMap from "./CityMap";

const CitiesDashboard = () => {
  const fetching = useSelector((state) => state.cities.fetchingSelected);
  const city = useSelector((state) => state.cities.selected);

  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (city) {
    return (
      <div className="pt-1 ps-1 cities-dashboard">
        <CityHeader city={city} />
        {/* <PlaceLinks /> */}
        <div className="row">
          <div className="col-lg-8">
            <CityMap city={city} label="Map" icon={getFullPathImage("world-map")} />
          </div>
          <div className="col-lg-4">
            <CityDetails city={city} />
            {/* <PlaceDetails item={item} />
            <Weather weather={item.weather} />
            <Time weather={item.weather} /> */}
          </div>
          {/* <div className="col-lg-1" style={{"border": "solid 2px red"}}></div> */}
        </div>
      </div>
    );
  } else {
    return <div className="cities-dashboard">No city found</div>;
  }
};

export default CitiesDashboard;
