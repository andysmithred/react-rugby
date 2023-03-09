import { useSelector } from "react-redux";

const DeleteCity = ({ onDelete, onCancel }) => {
  const city = useSelector((state) => state.cities.item);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onDelete(city.cityId);
  };

  return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete City</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ID</div>
          <div className="value">{city.cityId}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">NAME</div>
          <div className="value">{city.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">REGION</div>
          <div className="value">{city.region.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">POPULATION</div>
          <div className="value">
            {city.population ? city.population.toLocaleString("en-GB") : "--"}
          </div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">LATITUDE</div>
          <div className="value">{city.latitude ? city.latitude : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">LONGITUDE</div>
          <div className="value">{city.longitude ? city.longitude : "--"}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete City"
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

export default DeleteCity;
