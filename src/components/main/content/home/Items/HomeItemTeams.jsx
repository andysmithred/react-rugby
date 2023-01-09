import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchTeams,
  fetchTeam,
} from "../../../../reducers/teams/teamsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemTeams = () => {
  const items = useSelector((state) => state.teams.items);
  const item = useSelector((state) => state.teams.item);
  const fetching = useSelector((state) => state.teams.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Teams")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchTeam(items[0].teamId));
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

export default HomeItemTeams;
