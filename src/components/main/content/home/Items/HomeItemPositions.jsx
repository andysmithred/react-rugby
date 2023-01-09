import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchPositions,
  fetchPosition,
} from "../../../../reducers/positions/positionsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemPositions = () => {
  const items = useSelector((state) => state.positions.items);
  const item = useSelector((state) => state.positions.item);
  const fetching = useSelector((state) => state.positions.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Positions")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchPosition(items[0].positionId));
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

export default HomeItemPositions;
