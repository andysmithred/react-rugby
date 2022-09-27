import { useSelector } from "react-redux";

import SchoolTypesDetailsView from "./views/SchoolTypesDetailsView";
import SchoolTypesEditView from "./views/SchoolTypesEditView";
import SchoolTypesIndexView from "./views/SchoolTypesIndexView";
import SchoolTypesNewView from "./views/SchoolTypesNewView";
import SchoolTypesDeleteView from "./views/SchoolTypesDeleteView";

import "../Content.css";

const SchoolTypesContent = () => {
  const fetching = useSelector((state) => state.schoolTypes.fetching);
  const view = useSelector((state) => state.schoolTypes.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="content-main">
      <div className="d-flex flex-column content-main">
        {view === "index" && <SchoolTypesIndexView />}
        {view === "details" && <SchoolTypesDetailsView />}
        {view === "new" && <SchoolTypesNewView />}
        {view === "edit" && <SchoolTypesEditView />}
        {view === "delete" && <SchoolTypesDeleteView />}
      </div>
    </div>
  );
};

export default SchoolTypesContent;
