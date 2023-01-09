import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchSeasons,
  fetchSeason,
} from "../../../../reducers/seasons/seasonsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemSeasons = () => {
  const items = useSelector((state) => state.seasons.items);
  const item = useSelector((state) => state.seasons.item);
  const fetching = useSelector((state) => state.seasons.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Seasons")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSeasons());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchSeason(items[0].seasonId));
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

export default HomeItemSeasons;
