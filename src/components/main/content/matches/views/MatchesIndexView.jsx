import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/matches/matchesSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const MatchesIndexView = () => {
  const items = useSelector((state) => state.matches.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Matches")
  );

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
    { field: "title" },
    { field: "date", valueFormatter: dateFormatter },
    { field: "season.year" },
    { field: "stadium.name" },
    { field: "competition.name" },
    { field: "attendance", valueFormatter: numberFormatter },
    { field: "referee.name" },
    { field: "complete" },
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

export default MatchesIndexView;
