import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  updateCompetition,
  setView,
} from "../../../../reducers/competitions/competitionsSlice";
import ItemsHeader from "../../common/ItemsHeader";
import EditCompetition from "../forms/EditCompetition";

const CompetitionsEditView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Competitions")
  );

  const handleEdit = (updated) => {
    dispatch(updateCompetition(updated));
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setView}
      />
      <EditCompetition onEdit={handleEdit} />
    </div>
  );
};

export default CompetitionsEditView;
