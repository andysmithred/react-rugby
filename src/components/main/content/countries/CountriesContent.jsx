import { useSelector } from "react-redux";
import CountriesDetailsView from "./views/CountriesDetailsView";
import CountriesIndexView from "./views/CountriesIndexView";
import CountriesNewView from "./views/CountriesNewView";
import CountriesEditView from "./views/CountriesEditView";
import CountriesDeleteView from "./views/CountriesDeleteView";

import "../Content.css";

const CountriesContent = () => {
  const fetching = useSelector((state) => state.countries.fetchingItems);
  const view = useSelector((state) => state.countries.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="content-main">
      <div className="d-flex flex-column content-main">
        {view === "index" && <CountriesIndexView />}
        {view === "details" && <CountriesDetailsView />}
        {view === "new" && <CountriesNewView />}
        {view === "edit" && <CountriesEditView />}
        {view === "delete" && <CountriesDeleteView />}
      </div>
    </div>
  );
};

export default CountriesContent;
