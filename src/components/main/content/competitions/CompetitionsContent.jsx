import { useSelector } from "react-redux";

import CompetitionsIndexView from "./views/CompetitionsIndexView";
import CompetitionsDetailsView from "./views/CompetitionsDetailsView";
import CompetitionsNewView from "./views/CompetitionsNewView";
import CompetitionsEditView from "./views/CompetitionsEditView";
import CompetitionDeleteView from "./views/CompetitionsDeleteView";

import "../Content.css";

const CompetitionsContent = () => {
  const fetching = useSelector((state) => state.competitions.fetchingItems);
  const view = useSelector((state) => state.competitions.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="content-main">
      <div className="d-flex flex-column content-main">
        {view === "index" && <CompetitionsIndexView />}
        {view === "details" && <CompetitionsDetailsView />}
        {view === "new" && <CompetitionsNewView />}
        {view === "edit" && <CompetitionsEditView />}
        {view === "delete" && <CompetitionDeleteView />}
      </div>
    </div>
  );
};

export default CompetitionsContent;
