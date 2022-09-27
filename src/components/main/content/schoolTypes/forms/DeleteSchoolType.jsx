import { useSelector } from "react-redux";

const DeleteSchoolType = ({ onDelete, onCancel }) => {
  const schoolType = useSelector((state) => state.schoolTypes.selected);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onDelete(schoolType.schoolTypeId);
  };

  if (schoolType.numberSchools > 0) {
    return (
      <div>
        There are schools connected to this school type. Please delete them first.
      </div>
    );
  }

  return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete School Type</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ID</div>
          <div className="value">{schoolType.schoolTypeId}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">TYPE</div>
          <div className="value">{schoolType.type}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete School Type"
        className="btn btn-sm btn-outline-light"
      ></input>
      <input
        type="button"
        value="Cancel"
        className="btn btn-sm btn-outline-light ms-2"
        onClick={onCancel}
      ></input>
    </form>
  );
};

export default DeleteSchoolType;
