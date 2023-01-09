import { useDispatch } from "react-redux";
import {
  deleteCoach,
  setView,
} from "../../../../reducers/coaches/coachesSlice";
import CoachesHeader from "../header/CoachesHeader";
import DeleteCoach from "../forms/DeleteCoach";

const CoachesDeleteView = () => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCoach(id));
  };

  const handleCancel = () => {
    dispatch(setView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <CoachesHeader menu_items={["Index", "Details"]} />
      <DeleteCoach onDelete={handleDelete} onCancel={handleCancel} />
    </div>
  );
};

export default CoachesDeleteView;
