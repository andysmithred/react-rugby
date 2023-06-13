import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchCoaches,
  addCoach,
  setCoachesView,
} from "../../../../reducers/coaches/coachesSlice";
import ItemsHeader from "../../common/ItemsHeader";
import AddCoach from "../forms/AddCoach";


const CoachesNewView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((x) => x.name === "Coaches")
  );

  const handleAddItem = (item) => {
    dispatch(addCoach(item));
    dispatch(fetchCoaches());
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setCoachesView}
      />
      <AddCoach onAdd={handleAddItem} />
    </div>
  );
};

export default CoachesNewView;
