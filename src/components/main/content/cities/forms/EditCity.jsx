import { useState } from "react";
import { useSelector } from "react-redux/es/exports";

const EditCity = ({ onEditCity }) => {
  const regions = useSelector((state) => state.regions.items);
  const city = useSelector((state) => state.cities.selected);

  const [name, setName] = useState(city.name);
  const [population, setPopulation] = useState(city.population);
  const [latitude, setLatitude] = useState(city.latitude);
  const [longitude, setLongitude] = useState(city.longitude);
  const [regionId, setRegionId] = useState(city.regionId);
  const [isCapital, setIsCapital] = useState(city.isCapital);

  let options = [];
  options = regions.map((r) => {
    return (
      <option key={r.regionId} value={r.regionId}>
        {r.name}
      </option>
    );
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedCity = {
      cityId: city.cityId,
      name,
      population,
      latitude,
      longitude,
      regionId,
      isCapital,
    };
    onEditCity(updatedCity);
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Edit City</h5>
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
          value={population ? population : ""}
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
          value={latitude ? latitude : ""}
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
          value={longitude ? longitude : ""}
          onChange={(e) => setLongitude(e.target.value)}
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
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Is Capital
        </span>
        <div className="input-group-text bg-dark text-white">
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

export default EditCity;
