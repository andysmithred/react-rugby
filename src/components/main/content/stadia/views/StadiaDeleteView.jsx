import { useDispatch } from "react-redux";
import {
  deleteStadium,
  setView,
} from "../../../../reducers/stadia/stadiaSlice";
import StadiaHeader from "../header/StadiaHeader";
import DeleteStadium from "../forms/DeleteStadium";


const StadiaDeleteView = () => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteStadium(id));
  };

  const handleCancel = () => {
    dispatch(setView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <StadiaHeader menu_items={["Index", "Details"]} />
      <DeleteStadium onDelete={handleDelete} onCancel={handleCancel} />
    </div>
  );
};

export default StadiaDeleteView;
