import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRegion, fetchRegions } from "../../../../reducers/regions/regionsSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";

const HomeItemRegions = () => {
  const regions = useSelector((state) => state.regions.items);
  const region = useSelector((state) => state.regions.selected);
  const fetching = useSelector((state) => state.regions.fetching);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Regions")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  useEffect(() => {
    if (regions.length > 0 && !region) {
      dispatch(fetchRegion(regions[0].regionId));
    }
  }, [dispatch, regions, region]);

  const handleItemClick = (category) => {
    dispatch(setCategory(category));
  };

  if (fetching) {
    return <div className="mt-1 loading">LOADING...</div>;
  }

  return (
    <div className="item">
      <HomeItem
        category={category}
        value={regions.length}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default HomeItemRegions;
