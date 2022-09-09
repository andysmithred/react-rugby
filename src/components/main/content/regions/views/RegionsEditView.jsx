import { useDispatch } from "react-redux/es/exports";
import RegionsHeader from "../header/RegionsHeader";
import EditRegion from "../forms/EditRegion";
import { updateRegion } from "../../../../reducers/regions/regionsSlice";

const RegionsEditView = () => {
  const dispatch = useDispatch();

  const handleEditRegion = (updatedRegion) => {
    console.log("IN >> handleEditRegion");
    dispatch(updateRegion(updatedRegion));
  };
  
  return (
    <div className="d-flex flex-column">
      <RegionsHeader menu_items={["Index", "Details"]} />
      <EditRegion onEditRegion={handleEditRegion} />
    </div>
  );
};

export default RegionsEditView;
