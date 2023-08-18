import { useSelector, useDispatch } from "react-redux";
import { setMatchesView, fetchMatch } from "../../../../reducers/matches/matchesSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const MatchesIndexView = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.matches.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Matches")
  );

  const rowClickedHandler = (data) => {
    dispatch(fetchMatch(data.matchId));
    dispatch(setMatchesView("details"));
  }


  const dateFormatter = (params) => {
    var myDate = new Date(params.data.date);
    return myDate.toLocaleDateString("en-GB");
  };

  const numberFormatter = (params) => {
    if (params.data.attendance) {
      return params.data.attendance.toLocaleString("en-GB");
    } else {
      return "--";
    }
  };

  const colDefs = [
    { headerName: "Id", field: "matchId" },
    { field: "label" },
    { field: "date", valueFormatter: dateFormatter },
    { field: "season" },
    { field: "stadium" },
    { field: "competition" },
    { field: "attendance", valueFormatter: numberFormatter },
    { field: "referee" },
    { field: "complete" },
  ];

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Details", "New"]}
        category={category}
        setView={setMatchesView}
      />
      <ItemsGrid items={items} columnDefs={colDefs} onRowClick={rowClickedHandler}  />
    </div>
  );
};

export default MatchesIndexView;
