import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchMatchTeams,
  fetchMatchTeam,
} from "../../../../reducers/matchTeams/matchTeamsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import HomeItem from "./HomeItem";

import "./HomeItems.css";

const HomeItemMatchTeams = () => {
  const items = useSelector((state) => state.matchTeams.items);
  const item = useSelector((state) => state.matchTeams.item);
  const fetching = useSelector((state) => state.matchTeams.fetchingItems);
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "MatchTeams")
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatchTeams());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0 && !item) {
      dispatch(fetchMatchTeam(items[0].matchTeamId));
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

export default HomeItemMatchTeams;
