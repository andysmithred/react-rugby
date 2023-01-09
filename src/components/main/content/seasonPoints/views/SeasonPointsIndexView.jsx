import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/seasonPoints/seasonPointsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const SeasonPointsIndexView = () => {
  const items = useSelector((state) => state.seasonPoints.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "SeasonPoints")
  );

  const colDefs = [
    { headerName: "Id", field: "seasonPointId" },
    { headerName: "Season", field: "season.year" },
    { headerName: "Type", field: "pointType.type" },
    { headerName: "Value", field: "value" }
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

export default SeasonPointsIndexView;
