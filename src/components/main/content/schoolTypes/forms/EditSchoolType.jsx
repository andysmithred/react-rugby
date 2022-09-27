import { useState } from "react";
import { useSelector } from "react-redux/es/exports";

const EditSchoolType = ({ onEdit }) => {
  const schoolType = useSelector((state) => state.schoolTypes.selected);
  const [type, setType] = useState(schoolType.type);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEdit({ schoolTypeId: schoolType.schoolTypeId, type });
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Edit School Type</h5>
      </div>
      <hr></hr>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">Type</span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Save School Type"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default EditSchoolType;
