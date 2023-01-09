import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/referees/refereesSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const RefereesIndexView = () => {
  const items = useSelector((state) => state.referees.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Referees")
  );

  const colDefs = [
    { headerName: "Id", field: "refereeId" },
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

export default RefereesIndexView;
