import { useSelector, useDispatch } from "react-redux";
import { 
  fetchCompetition,
  setCompetitionsView 
} from "../../../../reducers/competitions/competitionsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const CompetitionsIndexView = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.competitions.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Competitions")
  );

  const colDefs = [
    { field: "competitionId" },
    { field: "name" },
    { field: "matches" }
  ];

  const rowClickedHandler = (data) => {
    dispatch(fetchCompetition(data.competitionId));
    dispatch(setCompetitionsView("details"));
  }

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Details", "New"]}
        category={category}
        setView={setCompetitionsView}
      />
      <ItemsGrid 
        items={items}
        columnDefs={colDefs}
        onRowClick={rowClickedHandler}
      />
    </div>
  );
};

export default CompetitionsIndexView;
