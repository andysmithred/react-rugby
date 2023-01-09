import { useSelector } from "react-redux";

import PlayerHeader from "./PlayerHeader";
import PlayerDetails from "./PlayerDetails";

import "./PlayerDashboard.css";

const PlayerDashboard = () => {
  const fetching = useSelector((state) => state.players.fetchingItem);
  const item = useSelector((state) => state.players.item);

  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (item) {
    return (
      <div className="pt-1 ps-1 stadium-dashboard">
        <PlayerHeader item={item} />
        <div className="row">
          <div className="col-lg-4">
            <PlayerDetails item={item} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="stadium-dashboard">No player found</div>;
  }
};

export default PlayerDashboard;
