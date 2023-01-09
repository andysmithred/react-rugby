import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/matchPoints/matchPointsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const MatchPointsIndexView = () => {
  const items = useSelector((state) => state.matchPoints.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "MatchPoints")
  );

  const colDefs = [
    { headerName: "Id", field: "matchPointId" },
    { headerName: "Number", field: "matchLineUp.matchNumber" },
    { headerName: "Position", field: "matchLineUp.matchPosition" },
    { headerName: "Player", field: "matchLineUp.player" },
    { headerName: "Team", field: "matchLineUp.team" },
    { headerName: "Point Type", field: "pointType.type" },
    { headerName: "Point Value", field: "xxx" },
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

export default MatchPointsIndexView;
