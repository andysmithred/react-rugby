import { useSelector } from "react-redux";

const DeleteStadium = ({ onDelete, onCancel }) => {
  const item = useSelector((state) => state.stadia.item);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onDelete(item.stadiumId);
  };

  return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete Stadium</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ID</div>
          <div className="value">{item.stadiumId}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">NAME</div>
          <div className="value">{item.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">CITY</div>
          <div className="value">{item.city.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">CAPACITY</div>
          <div className="value">{item.capacity ? item.capacity : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">LATITUDE</div>
          <div className="value">{item.latitude ? item.latitude : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">LONGITUDE</div>
          <div className="value">{item.longitude ? item.longitude : "--"}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete Stadium"
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

export default DeleteStadium;
