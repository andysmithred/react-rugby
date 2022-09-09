import { useDispatch } from "react-redux/es/exports";
import RegionsHeader from "../header/RegionsHeader";
import AddRegion from "../forms/AddRegion";
import { addRegion } from "../../../../reducers/regions/regionsSlice";

const RegionsNewView = () => {
  const dispatch = useDispatch();

  const handleAddRegion = (region) => {
    console.log("IN >> handleAddRegion");
    dispatch(addRegion(region));
  };

  return (
    <div className="d-flex flex-column">
      <RegionsHeader menu_items={["Index"]} />
      <AddRegion onAddRegion={handleAddRegion} />
    </div>
  );
};

export default RegionsNewView;
