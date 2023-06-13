import { useDispatch, useSelector } from "react-redux";
import {
  deleteCoach,
  setCoachesView,
} from "../../../../reducers/coaches/coachesSlice";
import ItemsHeader from "../../common/ItemsHeader";
import DeleteCoach from "../forms/DeleteCoach";

const CoachesDeleteView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Coaches")
  );

  const handleDelete = (id) => {
    dispatch(deleteCoach(id));
  };

  const handleCancel = () => {
    dispatch(setCoachesView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setCoachesView}
      />
      <DeleteCoach onDelete={handleDelete} onCancel={handleCancel} />
    </div>
  );
};

export default CoachesDeleteView;
