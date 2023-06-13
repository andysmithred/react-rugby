import { useSelector, useDispatch } from "react-redux";
import { fetchCoach, setCoachesView } from "../../../../reducers/coaches/coachesSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const CoachesIndexView = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.coaches.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Coaches")
  );

  const rowClickedHandler = (data) => {
    dispatch(fetchCoach(data.coachId));
    dispatch(setCoachesView("details"));
  }

  const colDefs = [
    { field: "coachId" },
    { field: "name" },
    { field: "firstName"},
    { field: "lastName"},
    { field: "city" },
    { field: "complete" }
  ];

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Details", "New"]}
        category={category}
        setView={setCoachesView}
      />
      <ItemsGrid
        items={items}
        columnDefs={colDefs}
        onRowClick={rowClickedHandler}
      />
    </div>
  );
};

export default CoachesIndexView;
