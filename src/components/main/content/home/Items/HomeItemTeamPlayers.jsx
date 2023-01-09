import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchTeamPlayers,
  fetchTeamPlayer,
} from "../../../../reducers/teamPlayers/teamPlayersSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemTeamPlayers = () => {
  const items = useSelector((state) => state.teamPlayers.items);
  const item = useSelector((state) => state.teamPlayers.item);
  const fetching = useSelector((state) => state.teamPlayers.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "TeamPlayers")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeamPlayers());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchTeamPlayer(items[0].teamPlayerId));
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

export default HomeItemTeamPlayers;
