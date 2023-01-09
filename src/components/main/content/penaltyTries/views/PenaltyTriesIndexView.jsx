import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/penaltyTries/penaltyTriesSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const PenaltyTriesIndexView = () => {
  const items = useSelector((state) => state.penaltyTries.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "PenaltyTries")
  );

  const dateFormatter = (params) => {
    var myDate = new Date(params.data.matchTeam.date);
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
    { headerName: "Id", field: "penaltyTryId" },
    { headerName: "Team", field: "matchTeam.team" },
    {
      headerName: "Date",
      field: "matchTeam.date",
      valueFormatter: dateFormatter,
    },
    { headerName: "Stadium", field: "matchTeam.stadium" },
    {
      headerName: "Type",
      field: "pointType.type"
    },
    { headerName: "Value", field: "value" }
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

export default PenaltyTriesIndexView;
