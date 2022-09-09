import { useSelector } from "react-redux";
import CitiesIndexView from "./views/CitiesIndexView";
import CitiesDetailsView from "./views/CitiesDetailsView";
import CitiesNewView from "./views/CitiesNewView";
import CitiesEditView from "./views/CitiesEditView";
import CitiesDeleteView from "./views/CitiesDeleteView";
import "../Content.css";

const CitiesContent = () => {
  const fetching = useSelector((state) => state.cities.fetchingItems);
  const view = useSelector((state) => state.cities.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="d-flex flex-column content-main">
      {view === "index" && <CitiesIndexView />}
      {view === "details" && <CitiesDetailsView />}
      {view === "new" && <CitiesNewView />}
      {view === "edit" && <CitiesEditView />}
      {view === "delete" && <CitiesDeleteView />}
    </div>
  );
};

export default CitiesContent;
