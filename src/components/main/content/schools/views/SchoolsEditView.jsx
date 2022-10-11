import { useDispatch } from "react-redux/es/exports";
import { updateSchool } from "../../../../reducers/schools/schoolsSlice";
import SchoolsHeader from "../header/SchoolsHeader";
import EditSchool from "../forms/EditSchool";

const SchoolsEditView = () => {
  const dispatch = useDispatch();

  const handleEdit = (updatedSchool) => {
    console.log("IN >> handleEdit");
    console.log(updatedSchool);
    dispatch(updateSchool(updatedSchool));
  };

  return (
    <div className="d-flex flex-column">
      <SchoolsHeader menu_items={["Index", "Details"]} />
      <EditSchool onEdit={handleEdit} />
    </div>
  );
};

export default SchoolsEditView;
