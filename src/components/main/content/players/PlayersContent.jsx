import { useSelector } from "react-redux";

import PlayersIndexView from "./views/PlayersIndexView";
import PlayersDetailsView from "./views/PlayersDetailsView";
import PlayersNewView from "./views/PlayersNewView";
import PlayersEditView from "./views/PlayersEditView";
import PlayersDeleteView from "./views/PlayersDeleteView";

import "../Content.css";


const PlayersContent = () => {
  const fetching = useSelector((state) => state.players.fetchingItems);
  const view = useSelector((state) => state.players.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="content-main">
      <div className="d-flex flex-column content-main">
        {view === "index" && <PlayersIndexView />}
        {view === "details" && <PlayersDetailsView />}
        {view === "new" && <PlayersNewView />}
        {view === "edit" && <PlayersEditView />}
        {view === "delete" && <PlayersDeleteView />}
      </div>
    </div>
  );
};

export default PlayersContent;
