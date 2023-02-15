import { useSelector } from "react-redux";
import RegionsDetailsView from "./views/RegionsDetailsView";
import RegionsEditView from "./views/RegionsEditView";
import RegionsIndexView from "./views/RegionsIndexView";
import RegionsNewView from "./views/RegionsNewView";
import RegionsDeleteView from "./views/RegionsDeleteView";
import "../Content.css";


const RegionsContent = () => {
  const fetching = useSelector((state) => state.regions.fetchingItems);
  const view = useSelector((state) => state.regions.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="content-main">
      <div className="d-flex flex-column content-main">
        {view === "index" && <RegionsIndexView />}
        {view === "details" && <RegionsDetailsView />}
        {view === "new" && <RegionsNewView />}
        {view === "edit" && <RegionsEditView />}
        {view === "delete" && <RegionsDeleteView />}
      </div>
    </div>
  );
};

export default RegionsContent;
