import { useSelector, useDispatch } from "react-redux";
import { setRegionsView, fetchRegion } from "../../../../reducers/regions/regionsSlice";
import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const RegionsIndexView = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.regions.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Regions")
  );

  const rowClickedHandler = (data) => {
    dispatch(fetchRegion(data.regionId));
    dispatch(setRegionsView("details"));
  }

  const colDefs = [
    { field: "regionId" },
    { field: "name" },
    { field: "country" },
    { field: "cities" },
    { field: "complete" },
  ];

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Details", "New"]}
        category={category}
        setView={setRegionsView}
      />
      <ItemsGrid
        items={items}
        columnDefs={colDefs}
        onRowClick={rowClickedHandler}
      />
    </div>
  );
};

export default RegionsIndexView;
