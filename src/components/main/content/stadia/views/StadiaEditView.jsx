import { useDispatch } from "react-redux/es/exports";
import { updateStadium } from "../../../../reducers/stadia/stadiaSlice";
import StadiaHeader from "../header/StadiaHeader";
import EditStadium from "../forms/EditStadium";

const StadiaEditView = () => {
  const dispatch = useDispatch();

  const handleEdit = (updated) => {
    dispatch(updateStadium(updated));
  };

  return (
    <div className="d-flex flex-column">
      <StadiaHeader menu_items={["Index", "Details"]} />
      <EditStadium onEdit={handleEdit} />
    </div>
  );
};

export default StadiaEditView;
