import { useSelector } from "react-redux";

import "../Content.css";
import CountriesDetailsView from "./views/CountriesDetailsView";
import CountriesIndexView from "./views/CountriesIndexView"
// import CountriesList from "./CountriesList";

const CountriesContent = () => {
  const fetching = useSelector((state) => state.countries.fetching);
  const view = useSelector((state) => state.countries.view);

  if (fetching) {
    return <div className="content-main">LOADING...</div>;
  }

  return (
    <div className="content-main">
      <div className="d-flex flex-column content-main">
        {view === "index" && <CountriesIndexView />}
        {view === "details" && <CountriesDetailsView />}
        
        {/* {view === "details" && <RegionsDetailsView />} */}
        {/* {view === "new" && <RegionsNewView />} */}
        {/* {view === "edit" && <RegionsEditView />} */}
        {/* {view === "delete" && <RegionsDeleteView />} */}
      </div>
    </div>
  );
};

export default CountriesContent;
