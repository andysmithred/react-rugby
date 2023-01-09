import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/matchLineUps/matchLineUpsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";


import "../../Content.css";

const MatchLineUpsIndexView = () => {
  const items = useSelector((state) => state.matchLineUps.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "MatchLineUps")
  );

  const colDefs = [
    { headerName: "Id", field: "matchLineUpId" },
    { headerName: "Number", field: "matchPosition.number" },
    { headerName: "Position", field: "matchPosition.position" },
    { headerName: "Player", field: "player.name" },
    { headerName: "Team", field: "matchTeam.team" },
    { headerName: "Captain", field: "captain" },
    { headerName: "Capped", field: "capped" },
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

export default MatchLineUpsIndexView;
