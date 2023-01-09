import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/competitions/competitionsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const CompetitionsIndexView = () => {
  const items = useSelector((state) => state.competitions.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Competitions")
  );

  const colDefs = [
    { field: "competitionId" },
    { field: "name" },
    { field: "numberMatches" }
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

export default CompetitionsIndexView;
