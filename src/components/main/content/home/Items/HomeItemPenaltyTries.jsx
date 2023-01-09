import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchPenaltyTries,
  fetchPenaltyTry,
} from "../../../../reducers/penaltyTries/penaltyTriesSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemPenaltyTries = () => {
  const items = useSelector((state) => state.penaltyTries.items);
  const item = useSelector((state) => state.penaltyTries.item);
  const fetching = useSelector((state) => state.penaltyTries.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "PenaltyTries")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPenaltyTries());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchPenaltyTry(items[0].penaltyTryId));
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

export default HomeItemPenaltyTries;
