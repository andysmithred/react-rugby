import { useDispatch } from "react-redux/es/exports";
import SchoolTypesHeader from "../header/SchoolTypesHeader";
import { addSchoolType } from "../../../../reducers/schoolTypes/schoolTypesSlice";
import AddSchoolType from "../forms/AddSchoolType";

const SchoolTypesNewView = () => {
  const dispatch = useDispatch();

  const handleAddSchoolType = (schoolType) => {
    dispatch(addSchoolType(schoolType));
  };

  return (
    <div className="d-flex flex-column">
      <SchoolTypesHeader menu_items={["Index"]} />
      <AddSchoolType onAddSchoolType={handleAddSchoolType} />
    </div>
  );
};

export default SchoolTypesNewView;
