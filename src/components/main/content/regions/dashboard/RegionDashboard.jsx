import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRegion } from "../../../../reducers/regions/regionsSlice";

import RegionHeader from "./RegionHeader";
import RegionLinks from "./RegionLinks";
import RegionDetails from "./RegionDetails";
import CitiesDetailsList from "../../cities/list/CitiesDetailsList";

import "./RegionDashboard.css";

const RegionDashboard = () => {
  const dispatch = useDispatch();
  const fetching = useSelector((state) => state.regions.fetchingItem);
  const regions = useSelector((state) => state.regions.items);
  const region = useSelector((state) => state.regions.item);

  useEffect(() => {
    if (!fetching && regions.length > 0 && !region) {
      dispatch(fetchRegion(regions[0].regionId));
    }
  }, [dispatch, fetching, regions, region]);

  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (region) {
    return (
      <div className="pt-1 ps-1 region-dashboard">
        <RegionHeader region={region} />
        <RegionLinks region={region} />
        <div className="row">
          <div className="col-lg-3">
            <RegionDetails region={region} />
          </div>
          <div className="col-lg-3 regions-dashboard-block">
            <CitiesDetailsList cities={region.cities} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="region-dashboard">No region found</div>;
  }
};

export default RegionDashboard;
