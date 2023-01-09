import { useSelector } from "react-redux";

import PenaltyTriesIndexView from "./views/PenaltyTriesIndexView";

// import CompetitionsIndexView from "./views/CompetitionsIndexView";
// import CompetitionsDetailsView from "./views/CompetitionsDetailsView";
// import CompetitionsNewView from "./views/CompetitionsNewView";
// import CompetitionsEditView from "./views/CompetitionsEditView";
// import CompetitionDeleteView from "./views/CompetitionsDeleteView";

import "../Content.css";

const PenaltyTriesContent = () => {
  const fetching = useSelector((state) => state.penaltyTries.fetchingItems);
  const view = useSelector((state) => state.penaltyTries.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="content-main">
      <div className="d-flex flex-column content-main">
        {view === "index" && <PenaltyTriesIndexView />}
        {/* {view === "index" && <CompetitionsIndexView />}
        {view === "details" && <CompetitionsDetailsView />}
        {view === "new" && <CompetitionsNewView />}
        {view === "edit" && <CompetitionsEditView />}
        {view === "delete" && <CompetitionDeleteView />} */}
      </div>
    </div>
  );
};

export default PenaltyTriesContent;
