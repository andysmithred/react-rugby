import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchSeasonPoints,
  fetchSeasonPoint,
} from "../../../../reducers/seasonPoints/seasonPointsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemSeasonPoints = () => {
  const items = useSelector((state) => state.seasonPoints.items);
  const item = useSelector((state) => state.seasonPoints.item);
  const fetching = useSelector((state) => state.seasonPoints.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "SeasonPoints")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSeasonPoints());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchSeasonPoint(items[0].seasonPointId));
    }
  }, [dispatch, items, item]);

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
        value={items.length}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default HomeItemSeasonPoints;
