import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchMatchLineUps,
  fetchMatchLineUp,
} from "../../../../reducers/matchLineUps/matchLineUpsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemMatchLineUps = () => {
  const items = useSelector((state) => state.matchLineUps.items);
  const item = useSelector((state) => state.matchLineUps.item);
  const fetching = useSelector((state) => state.matchLineUps.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "MatchLineUps")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatchLineUps());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchMatchLineUp(items[0].matchLineUpId));
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

export default HomeItemMatchLineUps;
