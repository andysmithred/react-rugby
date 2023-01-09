import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchCompetitions,
  fetchCompetition,
} from "../../../../reducers/competitions/competitionsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemCompetitions = () => {
  const items = useSelector((state) => state.competitions.items);
  const item = useSelector((state) => state.competitions.item);
  const fetching = useSelector((state) => state.competitions.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Competitions")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompetitions());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchCompetition(items[0].competitionId));
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

export default HomeItemCompetitions;
