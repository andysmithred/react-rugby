import { useSelector } from "react-redux";

const DeleteSchool = ({ onDelete, onCancel }) => {
  const school = useSelector((state) => state.schools.selected);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onDelete(school.schoolId);
  };

  return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete School</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ID</div>
          <div className="value">{school.schoolId}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">NAME</div>
          <div className="value">{school.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">CITY</div>
          <div className="value">{school.city.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">TYPE</div>
          <div className="value">{school.schoolType.type}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">FOUNDED</div>
          <div className="value">
            {school.founded ? school.founded : "--"}
          </div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">LATITUDE</div>
          <div className="value">{school.latitude ? school.latitude : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">LONGITUDE</div>
          <div className="value">{school.longitude ? school.longitude : "--"}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete School"
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

export default DeleteSchool;
