import { useDispatch, useSelector } from "react-redux";
import {
  deleteCompetition,
  setCompetitionsView,
} from "../../../../reducers/competitions/competitionsSlice";
import ItemsHeader from "../../common/ItemsHeader";
import DeleteCompetition from "../forms/DeleteCompetition";


const CompetitionDeleteView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Competitions")
  );

  const handleDelete = (id) => {
    dispatch(deleteCompetition(id));
  };

  const handleCancel = () => {
    dispatch(setCompetitionsView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Edit", "Delete"]}
        category={category}
        setView={setCompetitionsView}
      />
      <DeleteCompetition onDelete={handleDelete} onCancel={handleCancel} />
    </div>
  );
};

export default CompetitionDeleteView;
