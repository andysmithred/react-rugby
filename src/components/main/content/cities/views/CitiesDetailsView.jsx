import { useSelector } from "react-redux";
import { setCitiesView } from "../../../../reducers/cities/citiesSlice";

import ItemsHeader from "../../common/ItemsHeader";
import CitiesList from "../list/CitiesList";
import CitiesDashboard from "../dashboard/CitiesDashboard";

import "../../Content.css";

const CitiesDetailsView = () => {
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Cities")
  );

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Index", "New", "Edit", "Delete"]}
        category={category}
        setView={setCitiesView}
      />

      <div className="d-flex flex-row content-view-content">
        <CitiesList />
        <CitiesDashboard />
      </div>
    </div>
  );
};

export default CitiesDetailsView;
