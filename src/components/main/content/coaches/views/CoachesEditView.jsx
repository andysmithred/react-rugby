import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchCoaches,
  updateCoach,
  setCoachesView
} from "../../../../reducers/coaches/coachesSlice";
import ItemsHeader from "../../common/ItemsHeader";
import EditCoach from "../forms/EditCoach";


const CoachesEditView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Coaches")
  );

  const handleEdit = (updated) => {
    dispatch(updateCoach(updated));
    dispatch(fetchCoaches());
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setCoachesView}
      />
      <EditCoach onEdit={handleEdit} />
    </div>
  );
};

export default CoachesEditView;
