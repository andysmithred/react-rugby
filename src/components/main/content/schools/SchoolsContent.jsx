import { useSelector } from "react-redux";

import SchoolsIndexView from "./views/SchoolsIndexView";
import SchoolsDetailsView from "./views/SchoolsDetailsView";
import SchoolsNewView from "./views/SchoolsNewView";
import SchoolsEditView from "./views/SchoolsEditView";
import SchoolsDeleteView from "./views/SchoolsDeleteView";

import "../Content.css";

const SchoolsContent = () => {
  const fetching = useSelector((state) => state.schools.fetching);
  const view = useSelector((state) => state.schools.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="content-main">
      <div className="d-flex flex-column content-main">
        {view === "index" && <SchoolsIndexView />}
        {view === "details" && <SchoolsDetailsView />}
        {view === "new" && <SchoolsNewView />}
        {view === "edit" && <SchoolsEditView />}
        {view === "delete" && <SchoolsDeleteView />}
      </div>
    </div>
  );
};

export default SchoolsContent;
