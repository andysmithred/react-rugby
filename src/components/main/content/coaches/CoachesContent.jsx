import { useSelector } from "react-redux";

import CoachesIndexView from "./views/CoachesIndexView";
import CoachesDetailsView from "./views/CoachesDetailsView";
import CoachesNewView from "./views/CoachesNewView";
import CoachesEditView from "./views/CoachesEditView";
import CoachesDeleteView from "./views/CoachesDeleteView";


// import SchoolsDeleteView from "./views/SchoolsDeleteView";

import "../Content.css";

const CoachesContent = () => {
  const fetching = useSelector((state) => state.coaches.fetchingItems);
  const view = useSelector((state) => state.coaches.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="content-main">
      <div className="d-flex flex-column content-main">
        {view === "index" && <CoachesIndexView />}
        {view === "details" && <CoachesDetailsView />}
        {view === "new" && <CoachesNewView />}
        {view === "edit" && <CoachesEditView />}
        {view === "delete" && <CoachesDeleteView />}
      </div>
    </div>
  );
};

export default CoachesContent;
