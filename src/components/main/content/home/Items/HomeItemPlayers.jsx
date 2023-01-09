import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchPlayers,
  fetchPlayer,
} from "../../../../reducers/players/playersSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemPlayers = () => {
  const items = useSelector((state) => state.players.items);
  const item = useSelector((state) => state.players.item);
  const fetching = useSelector((state) => state.players.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Players")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayers());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchPlayer(items[0].playerId));
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

export default HomeItemPlayers;
