import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchMatchPoints,
  fetchMatchPoint,
} from "../../../../reducers/matchPoints/matchPointsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemMatchPoints = () => {
  const items = useSelector((state) => state.matchPoints.items);
  const item = useSelector((state) => state.matchPoints.item);
  const fetching = useSelector((state) => state.matchPoints.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "MatchPoints")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatchPoints());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchMatchPoint(items[0].matchPointId));
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

export default HomeItemMatchPoints;
