import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchStadia,
  fetchStadium
} from "../../../../reducers/stadia/stadiaSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemStadia = () => {
  const items = useSelector((state) => state.stadia.items);
  const item = useSelector((state) => state.stadia.item);
  const fetching = useSelector((state) => state.stadia.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Stadia")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStadia());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchStadium(items[0].stadiumId));
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

export default HomeItemStadia;
