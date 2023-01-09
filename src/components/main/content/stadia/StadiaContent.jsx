import { useSelector } from "react-redux";

import StadiaIndexView from "./views/StadiaIndexView";
import StadiaDetailsView from "./views/StadiaDetailsView";
import StadiaNewView from "./views/StadiaNewView";
import StadiaEditView from "./views/StadiaEditView";
import StadiaDeleteView from "./views/StadiaDeleteView";

import "../Content.css";

const StadiaContent = () => {
  const fetching = useSelector((state) => state.stadia.fetchingItems);
  const view = useSelector((state) => state.stadia.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="content-main">
      <div className="d-flex flex-column content-main">
        {view === "index" && <StadiaIndexView />}
        {view === "details" && <StadiaDetailsView />}
        {view === "new" && <StadiaNewView />}
        {view === "edit" && <StadiaEditView />}
        {view === "delete" && <StadiaDeleteView />}
      </div>
    </div>
  );
};

export default StadiaContent;
