import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchMatchPositions,
  fetchMatchPosition,
} from "../../../../reducers/matchPositions/matchPositionsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemMatchPositions = () => {
  const items = useSelector((state) => state.matchPositions.items);
  const item = useSelector((state) => state.matchPositions.item);
  const fetching = useSelector((state) => state.matchPositions.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "MatchPositions")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatchPositions());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchMatchPosition(items[0].matchPositionId));
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

export default HomeItemMatchPositions;
