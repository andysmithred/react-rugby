import { useDispatch } from "react-redux";
import { deleteSchool, setView } from "../../../../reducers/schools/schoolsSlice";
import SchoolsHeader from "../header/SchoolsHeader";
import DeleteSchool from "../forms/DeleteSchool";

const SchoolsDeleteView = () => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteSchool(id));
  };

  const handleCancel = () => {
    dispatch(setView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <SchoolsHeader menu_items={["Index", "Details"]} />
      <DeleteSchool onDelete={handleDelete} onCancel={handleCancel} />
    </div>
  );
};

export default SchoolsDeleteView;
