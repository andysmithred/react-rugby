import { useDispatch, useSelector } from "react-redux";
import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import ListSmallTile from "../../common/lists/ListSmallTile";
import ContentList from "../../common/ContentList";

import {
  fetchTeam,
  setTeamsView,
} from "../../../../reducers/teams/teamsSlice";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";

import "./TeamsDetailsList.css";

const TeamsDetailsList = ({ teams }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Teams")
  );

  let arrayForSort = [...teams];
  arrayForSort.sort((a, b) => a.name.localeCompare(b.name));

  const items = [];

  const handleItemClick = (id) => {
    dispatch(fetchTeam(id));
    dispatch(setTeamsView("details"));
    dispatch(setCategory(category));
  };

  arrayForSort.forEach((team) => {
    items.push(
      <ListSmallTile
        key={team.teamId}
        id={team.teamId}
        label={team.name}
        icon={category.icon}
        onItemClick={handleItemClick}
      />
    );
  });

  return (
    <div className="pt-1 mb-1 regions-details-list">
      <DetailsHeader icon={getFullPathImage("team")} label="Teams" />
      <ContentList items={items} />
    </div>
  );
};

export default TeamsDetailsList;
