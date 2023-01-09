import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/positions/positionsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const PositionsIndexView = () => {
  const items = useSelector((state) => state.positions.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Positions")
  );

  const colDefs = [
    { headerName: "Id", field: "positionId" },
    { headerName: "Name", field: "name" },
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

export default PositionsIndexView;
