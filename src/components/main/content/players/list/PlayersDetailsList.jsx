import { useDispatch, useSelector } from "react-redux";
import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import ListSmallTile from "../../common/lists/ListSmallTile";
import ContentList from "../../common/ContentList";

import {
  fetchPlayer,
  setView,
} from "../../../../reducers/players/playersSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";

import "./PlayersDetailsList.css";

const PlayersDetailsList = ({ players }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Players")
  );
  const items = [];

  const handleItemClick = (id) => {
    dispatch(fetchPlayer(id));
    dispatch(setView("details"));
    dispatch(setCategory(category));
  };

  players.forEach((player) => {
    items.push(
      <ListSmallTile
        key={player.playerId}
        id={player.playerId}
        label={player.name}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="pt-1 mb-1 players-details-list">
      <DetailsHeader icon={getFullPathImage("player")} label="Players" />
      <ContentList items={items} />
    </div>
  );
};

export default PlayersDetailsList;
