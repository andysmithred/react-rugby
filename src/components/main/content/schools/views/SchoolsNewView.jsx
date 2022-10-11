import { useDispatch } from "react-redux/es/exports";

import { addSchool } from "../../../../reducers/schools/schoolsSlice";
import SchoolsHeader from "../header/SchoolsHeader";
import AddSchool from "../forms/AddSchool";

const SchoolsNewView = () => {
  const dispatch = useDispatch();

  const handleAddSchool = (school) => {
    dispatch(addSchool(school));
  };

  return (
    <div className="d-flex flex-column">
        <SchoolsHeader menu_items={["Index"]} />
        <AddSchool onAddSchool={handleAddSchool} />
    </div>
  );
};

export default SchoolsNewView;
