import { useDispatch } from "react-redux/es/exports";

import { addCoach } from "../../../../reducers/coaches/coachesSlice";
import CoachesHeader from "../header/CoachesHeader";
import AddCoach from "../forms/AddCoach";

const CoachesNewView = () => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addCoach(item));
  };

  return (
    <div className="d-flex flex-column">
        <CoachesHeader menu_items={["Index"]} />
        <AddCoach onAdd={handleAddItem} />
    </div>
  );
};

export default CoachesNewView;
