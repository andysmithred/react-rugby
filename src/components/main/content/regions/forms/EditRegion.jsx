import { useState } from "react";
import { useSelector } from "react-redux/es/exports";

const EditRegion = ({ onEditRegion }) => {
  const countries = useSelector((state) => state.countries.items);
  const region = useSelector((state) => state.regions.selected);

  const [name, setName] = useState(region.name);
  const [countryId, setCountryId] = useState(region.countryId);

  let options = [];
  options = countries.map((x) => {
    return (
      <option key={x.countryId} value={x.countryId}>
        {x.name}
      </option>
    );
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEditRegion({ regionId: region.regionId, name, countryId });
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Edit Region</h5>
      </div>
      <hr></hr>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">Name</span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">Country</span>
        <select
          value={countryId}
          className="form-control"
          onChange={(e) => setCountryId(parseInt(e.target.value))}
        >
          {options}
        </select>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Save Region"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default EditRegion;
