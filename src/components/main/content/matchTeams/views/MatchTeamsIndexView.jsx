import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/matchTeams/matchTeamsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const MatchTeamsIndexView = () => {
  const items = useSelector((state) => state.matchTeams.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "MatchTeams")
  );

  const dateFormatter = (params) => {
    var myDate = new Date(params.data.match.date);
    return myDate.toLocaleDateString("en-GB");
  };

  const numberFormatter = (params) => {
    if (params.data.match.attendance) {
      return params.data.match.attendance.toLocaleString("en-GB");
    } else {
      return "--";
    }
  };

  const colDefs = [
    { headerName: "Id", field: "matchTeamId" },
    { headerName: "Team", field: "team.name" },
    { headerName: "Nick Name", field: "team.nickName" },
    { headerName: "Coach", field: "coach.name" },
    { headerName: "Date", field: "date", valueFormatter: dateFormatter },
    { headerName: "Competition", field: "match.competition" },
    { headerName: "Stadium", field: "match.stadium" },
    { headerName: "Attendance", field: "attendance", valueFormatter: numberFormatter },
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

export default MatchTeamsIndexView;
