import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/seasons/seasonsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const SeasonsIndexView = () => {
  const items = useSelector((state) => state.seasons.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Seasons")
  );

  const colDefs = [
    { headerName: "Id", field: "seasonId" },
    { headerName: "Year", field: "year" },
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

export default SeasonsIndexView;
