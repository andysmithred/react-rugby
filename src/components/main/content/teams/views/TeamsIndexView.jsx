import { useSelector } from "react-redux";
import { setTeamsView } from "../../../../reducers/teams/teamsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const TeamsIndexView = () => {
  const items = useSelector((state) => state.teams.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Teams")
  );

  const colDefs = [
    { headerName: "Id", field: "teamId" },
    { headerName: "Short Name", field: "smallName" },
    { headerName: "Name", field: "name" },
    { headerName: "Nick Name", field: "nickName" },
  ];

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Details", "New"]}
        category={category}
        setView={setTeamsView}
      />
      <ItemsGrid items={items} columnDefs={colDefs} />
    </div>
  );
};

export default TeamsIndexView;
