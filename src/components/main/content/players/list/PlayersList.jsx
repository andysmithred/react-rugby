import { useDispatch, useSelector } from "react-redux";
import FilterableContentList from "../../common/FilterableContentList";
import ListTile from "../../common/lists/ListTile";
import {
  fetchPlayer,
  filterPlayers,
} from "../../../../reducers/players/playersSlice";

import "./PlayersList.css";

const PlayersList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.players.items);
  const filter = useSelector((state) => state.players.filter);
  const category = useSelector((state) => state.categories.selected);
  const filterItems = [];

  const handleFilterTextChange = (filter) => dispatch(filterPlayers(filter));

  const handleItemClick = (id) => {
    dispatch(fetchPlayer(id));
  };

  items.forEach((item) => {
    // Check if name is filtered out
    if (item.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
      return;
    }
    filterItems.push(
      <ListTile
        key={item.playerId}
        id={item.playerId}
        primary={item.name}
        secondary={item.city ? item.city.name : "--"}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="players-list">
      <FilterableContentList
        onFilterTextChange={handleFilterTextChange}
        items={filterItems}
        filter={filter}
      />
    </div>
  );
};

export default PlayersList;
