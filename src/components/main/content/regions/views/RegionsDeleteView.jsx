import { useDispatch } from "react-redux";
import { deleteRegion, setView } from "../../../../reducers/regions/regionsSlice";
import DeleteRegion from "../forms/DeleteRegion";
import RegionsHeader from "../header/RegionsHeader";

const RegionsDeleteView = () => {
  const dispatch = useDispatch();

  const handleDeleteRegion = (id) => {
    console.log(`DELETE: ${id}`);
    dispatch(deleteRegion(id));
  };

  const handleCancel = () => {
    dispatch(setView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <RegionsHeader menu_items={["Index", "Details"]} />
      <DeleteRegion onDeleteRegion={handleDeleteRegion} onCancel={handleCancel} />
    </div>
  );
};

export default RegionsDeleteView;
