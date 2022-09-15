import { useSelector } from "react-redux";

const DeleteCountry = ({ onDeleteCountry, onCancel }) => {
  const country = useSelector((state) => state.countries.selected);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onDeleteCountry(country.countryId);
  };

  if (country.numberRegions > 0) {
    return (
      <div>
        There are regions connected to this country. Please delete them first.
      </div>
    );
  }

  return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete Country</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ID</div>
          <div className="value">{country.countryId}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">NAME</div>
          <div className="value">{country.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">FULL NAME</div>
          <div className="value">{country.fullName}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete Country"
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

export default DeleteCountry;
