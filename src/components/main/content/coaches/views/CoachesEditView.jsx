import { useDispatch } from "react-redux/es/exports";
import { updateCoach } from "../../../../reducers/coaches/coachesSlice";
import CoachesHeader from "../header/CoachesHeader";
import EditCoach from "../forms/EditCoach";

const CoachesEditView = () => {
  const dispatch = useDispatch();

  const handleEdit = (updated) => {
    dispatch(updateCoach(updated));
  };

  return (
    <div className="d-flex flex-column">
      <CoachesHeader menu_items={["Index", "Details"]} />
      <EditCoach onEdit={handleEdit} />
    </div>
  );
};

export default CoachesEditView;
