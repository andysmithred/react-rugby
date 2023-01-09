import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/matchPositions/matchPositionsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const MatchPositionsIndexView = () => {
  const items = useSelector((state) => state.matchPositions.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "MatchPositions")
  );

  const colDefs = [
    { headerName: "Id", field: "matchPositionId" },
    { headerName: "Name", field: "name" },
    { headerName: "Number", field: "number" },
    { headerName: "Forward", field: "isForward" },
    { headerName: "Back", field: "isBack" },
    { headerName: "Substitute", field: "isSubstitute" },
    { headerName: "Position", field: "position.name" },
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

export default MatchPositionsIndexView;
