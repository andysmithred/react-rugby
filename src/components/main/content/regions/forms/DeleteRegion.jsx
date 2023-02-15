import { useSelector } from "react-redux";

const DeleteRegion = ({ onDelete, onCancel }) => {
  const region = useSelector((state) => state.regions.item);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onDelete(region.regionId);
  };

  if (region.numberCities > 0) {
    return <div>There are cities connected to this region. Please delete them first.</div>
  }

  return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete Region</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ID</div>
          <div className="value">{region.regionId}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">NAME</div>
          <div className="value">{region.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">COUNTRY</div>
          <div className="value">{region.country.name}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete Region"
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

export default DeleteRegion;
