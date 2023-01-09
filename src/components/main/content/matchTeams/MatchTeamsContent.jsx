import { useSelector } from "react-redux";

import MatchTeamsIndexView from "./views/MatchTeamsIndexView";

// import CompetitionsIndexView from "./views/CompetitionsIndexView";
// import CompetitionsDetailsView from "./views/CompetitionsDetailsView";
// import CompetitionsNewView from "./views/CompetitionsNewView";
// import CompetitionsEditView from "./views/CompetitionsEditView";
// import CompetitionDeleteView from "./views/CompetitionsDeleteView";

import "../Content.css";

const MatchTeamsContent = () => {
  const fetching = useSelector((state) => state.matchTeams.fetchingItems);
  const view = useSelector((state) => state.matchTeams.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="content-main">
      <div className="d-flex flex-column content-main">
        {view === "index" && <MatchTeamsIndexView />}
        {/* {view === "index" && <CompetitionsIndexView />}
        {view === "details" && <CompetitionsDetailsView />}
        {view === "new" && <CompetitionsNewView />}
        {view === "edit" && <CompetitionsEditView />}
        {view === "delete" && <CompetitionDeleteView />} */}
      </div>
    </div>
  );
};

export default MatchTeamsContent;
