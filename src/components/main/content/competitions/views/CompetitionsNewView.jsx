import { useDispatch, useSelector } from "react-redux/es/exports";

import { 
  fetchCompetitions,
  addCompetition, 
  setCompetitionsView
} from "../../../../reducers/competitions/competitionsSlice";
import ItemsHeader from "../../common/ItemsHeader";
import AddCompetition from "../forms/AddCompetition";

const CompetitionsNewView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Competitions")
  );

  const handleAddItem = (item) => {
    dispatch(addCompetition(item));
    dispatch(fetchCompetitions())
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index"]}
        category={category}
        setView={setCompetitionsView}
      />
      <AddCompetition onAdd={handleAddItem} />
    </div>
  );
};

export default CompetitionsNewView;
