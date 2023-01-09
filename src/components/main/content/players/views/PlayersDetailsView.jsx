import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/players/playersSlice";

import ItemsHeader from "../../common/ItemsHeader";
import PlayersList from "../list/PlayersList";
import PlayerDashboard from "../dashboard/PlayerDashboard";

import "../../Content.css";

const PlayersDetailsView = () => {
    const category = useSelector((state) =>
      state.categories.items.find((c) => c.name === "Players")
    );

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Index", "Edit", "Delete"]}
        category={category}
        setView={setView}
      />

      <div className="d-flex flex-row content-view-content">
        <PlayersList />
        <PlayerDashboard />

        {/* <StadiaList />
        <StadiumDashboard /> */}
      </div>
    </div>
  );
};

export default PlayersDetailsView;
