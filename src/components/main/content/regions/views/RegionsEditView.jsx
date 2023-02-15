import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchRegions,
  updateRegion,
  setRegionsView,
} from "../../../../reducers/regions/regionsSlice";
import ItemsHeader from "../../common/ItemsHeader";
import EditRegion from "../forms/EditRegion";


const RegionsEditView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Regions")
  );

  const handleEdit = (updated) => {
    dispatch(updateRegion(updated));
    dispatch(fetchRegions());
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setRegionsView}
      />
      <EditRegion onEdit={handleEdit} />
    </div>
  );
};

export default RegionsEditView;
