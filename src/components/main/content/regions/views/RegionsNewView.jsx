import { useDispatch, useSelector } from "react-redux/es/exports";

import {
  fetchRegions,
  addRegion,
  setRegionsView,
} from "../../../../reducers/regions/regionsSlice";
import ItemsHeader from "../../common/ItemsHeader";
import AddRegion from "../forms/AddRegion";


const RegionsNewView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Regions")
  );

  const handleAddItem = (item) => {
    dispatch(addRegion(item));
    dispatch(fetchRegions());
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setRegionsView}
      />
      <AddRegion onAdd={handleAddItem} />
    </div>
  );
};

export default RegionsNewView;
