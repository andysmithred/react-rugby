import { useDispatch } from "react-redux";
import {
  deleteSchoolType,
  setView,
} from "../../../../reducers/schoolTypes/schoolTypesSlice";
import DeleteSchoolType from "../forms/DeleteSchoolType";
import SchoolTypesHeader from "../header/SchoolTypesHeader";

const SchoolTypesDeleteView = () => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteSchoolType(id));
  };

  const handleCancel = () => {
    dispatch(setView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <SchoolTypesHeader menu_items={["Index", "Details"]} />
      <DeleteSchoolType onDelete={handleDelete} onCancel={handleCancel} />
    </div>
  );
};

export default SchoolTypesDeleteView;
