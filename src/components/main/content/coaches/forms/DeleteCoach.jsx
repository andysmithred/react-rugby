import { useSelector } from "react-redux";

const DeleteCoach = ({ onDelete, onCancel }) => {
  const item = useSelector((state) => state.coaches.item);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onDelete(item.coachId);
  };

  return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete Coach</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ID</div>
          <div className="value">{item.coachId}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">FIRST NAME</div>
          <div className="value">{item.firstName}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">LAST NAME</div>
          <div className="value">{item.lastName}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">CITY</div>
          <div className="value">{item.city ? item.city.name : "--"}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete Coach"
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

export default DeleteCoach;
