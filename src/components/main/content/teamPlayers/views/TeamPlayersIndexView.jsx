import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/teamPlayers/teamPlayersSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const TeamPlayersIndexView = () => {
  const items = useSelector((state) => state.teamPlayers.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "TeamPlayers")
  );

  const colDefs = [
    { headerName: "Id", field: "teamPlayerId" },
    { headerName: "Name", field: "player.name" },
    { headerName: "Team", field: "team.name" },
  ];

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Details", "New"]}
        category={category}
        setView={setView}
      />
      <ItemsGrid items={items} columnDefs={colDefs} />
    </div>
  );
};

export default TeamPlayersIndexView;
