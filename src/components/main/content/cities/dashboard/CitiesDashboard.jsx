import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import { fetchCity } from "../../../../reducers/cities/citiesSlice";

import "./CitiesDashboard.css";
import CityDetails from "./CityDetails";
import CityHeader from "./CityHeader";
import CityMap from "./CityMap";

import SchoolsDetailsList from "../../schools/list/SchoolsDetailsList";
import StadiaDetailsList from "../../stadia/list/StadiaDetailsList";
import PlayersDetailsList from "../../players/list/PlayersDetailsList";
import CityLinks from "./CityLinks";

const CitiesDashboard = () => {
  const dispatch = useDispatch();
  const fetching = useSelector((state) => state.cities.fetchingItem);
  const cities = useSelector((state) => state.cities.items);
  const city = useSelector((state) => state.cities.item);

  useEffect(() => {
    if (!fetching && cities.length > 0 && !city) {
      dispatch(fetchCity(cities[0].cityId));
    }
  }, [dispatch, fetching, cities, city]);

  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (city) {
    return (
      <div className="pt-1 ps-1 cities-dashboard">
        <CityHeader city={city} />
        <CityLinks city={city} />
        <div className="row">
          <div className="col-lg-3">
            <CityDetails city={city} />
          </div>
          <div className="col-lg-3 cities-dashboard-block">
            <PlayersDetailsList players={city.players} />
          </div>
          <div className="col-lg-3 cities-dashboard-block">
            <SchoolsDetailsList schools={city.schools} />
          </div>
          <div className="col-lg-3 cities-dashboard-block">
            <StadiaDetailsList stadia={city.stadia} />
          </div>
          <div className="col-lg-3">
            <CityMap
              city={city}
              label="Map"
              icon={getFullPathImage("world-map")}
            />
          </div>
          <div className="col-lg-4">
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
