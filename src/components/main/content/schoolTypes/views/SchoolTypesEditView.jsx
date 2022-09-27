import { useDispatch } from "react-redux/es/exports";
import { updateSchoolType } from "../../../../reducers/schoolTypes/schoolTypesSlice";
import SchoolTypesHeader from "../header/SchoolTypesHeader";
import EditSchoolType from "../forms/EditSchoolType";

const SchoolTypesEditView = () => {
  const dispatch = useDispatch();

  const handleEdit = (updatedSchoolType) => {
    dispatch(updateSchoolType(updatedSchoolType));
  };

  return (
    <div className="d-flex flex-column">
      <SchoolTypesHeader menu_items={["Index", "Details"]} />
      <EditSchoolType onEdit={handleEdit} />
    </div>
  );
};

export default SchoolTypesEditView;
