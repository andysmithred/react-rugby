import { useState } from "react";
import { useSelector } from "react-redux/es/exports";

const AddCity = ({ onAddCity }) => {
  const regions = useSelector((state) => state.regions.items);

  const [name, setName] = useState("");
  const [population, setPopulation] = useState(undefined);
  const [latitude, setLatitude] = useState(undefined);
  const [longitude, setLongitude] = useState(undefined);
  const [regionId, setRegionId] = useState(regions[0].id);
  const [isCapital, setIsCapital] = useState(false);

  let options = [];
  options = regions.map((r) => {
    return (
      <option key={r.id} value={r.id}>
        {r.name}
      </option>
    );
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const city = {
      name,
      population,
      latitude,
      longitude,
      regionId,
      isCapital,
    };

    onAddCity(city);
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Add City</h5>
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
        <span className="input-group-text bg-dark text-white w-25">
          Population
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Population"
          value={population}
          onChange={(e) => setPopulation(parseInt(e.target.value))}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Latitude
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Latitude"
          value={latitude}
          onChange={(e) => setLatitude(parseInt(e.target.value))}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Longitude
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Longitude"
          value={longitude}
          onChange={(e) => setLongitude(parseInt(e.target.value))}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">Region</span>
        <select
          value={regionId}
          className="form-control"
          onChange={(e) => setRegionId(parseInt(e.target.value))}
        >
          {options}
        </select>
      </div>
      <div class="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Is Capital
        </span>
        <div class="input-group-text bg-dark text-white">
          <input
            type="checkbox"
            checked={isCapital}
            value={isCapital}
            onChange={(e) => setIsCapital(e.target.checked)}
          />
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Save City"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default AddCity;
