import { useSelector } from "react-redux";
import { setRegionsView } from "../../../../reducers/regions/regionsSlice";

import ItemsHeader from "../../common/ItemsHeader";
import RegionsList from "../list/RegionsList";
import RegionDashboard from "../dashboard/RegionDashboard";

import "../../Content.css";

const RegionsDetailsView = () => {
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Regions")
  );

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Index", "New", "Edit", "Delete"]}
        category={category}
        setView={setRegionsView}
      />
      <div className="d-flex flex-row content-view-content">
        <RegionsList />
        <RegionDashboard />
      </div>
    </div>
  );
};

export default RegionsDetailsView;
