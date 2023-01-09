import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/pointTypes/pointTypesSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const PointTypesIndexView = () => {
  const items = useSelector((state) => state.pointTypes.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "PointTypes")
  );

  const colDefs = [
    { headerName: "Id", field: "pointTypeId" },
    { headerName: "Type", field: "type" }
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

export default PointTypesIndexView;
