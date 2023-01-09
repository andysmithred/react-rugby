import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchMatches,
  fetchMatch,
} from "../../../../reducers/matches/matchesSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemMatches = () => {
  const items = useSelector((state) => state.matches.items);
  const item = useSelector((state) => state.matches.item);
  const fetching = useSelector((state) => state.matches.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Matches")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchMatch(items[0].matchId));
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

export default HomeItemMatches;
