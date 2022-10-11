import { useState } from "react";
import { useSelector } from "react-redux";

const AddSchool = ({ onAddSchool }) => {
  const cities = useSelector((state) => state.cities.items);
  const schoolTypes = useSelector((state) => state.schoolTypes.items);

  let cityOptions = [];
  cityOptions = cities.map((x) => {
    return (
      <option key={x.cityId} value={x.cityId}>
        {x.name}
      </option>
    );
  });

  let schoolTypeOptions = [];
  schoolTypeOptions = schoolTypes.map((t) => {
    return (
      <option key={t.schoolTypeId} value={t.schoolTypeId}>
        {t.type}
      </option>
    );
  });

  const [name, setName] = useState("");
  const [cityId, setCityId] = useState(cities[0].cityId);
  const [founded, setFounded] = useState(undefined);
  const [type, setType] = useState(schoolTypes[0].schoolTypeId);
  const [latitude, setLatitude] = useState(undefined);
  const [longitude, setLongitude] = useState(undefined);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const city = {
      name,
      cityId,
      founded,
      type,
      latitude,
      longitude,
    };

    onAddSchool(city);
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Add School Type</h5>
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
        <span className="input-group-text bg-dark text-white w-25">City</span>
        <select
          value={cityId}
          className="form-control"
          onChange={(e) => setCityId(parseInt(e.target.value))}
        >
          {cityOptions}
        </select>
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Founded
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Founded"
          value={founded}
          onChange={(e) => setFounded(parseInt(e.target.value))}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">Type</span>
        <select
          value={type}
          className="form-control"
          onChange={(e) => setType(parseInt(e.target.value))}
        >
          {schoolTypeOptions}
        </select>
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
      <hr></hr>
      <input
        type="submit"
        value="Save School"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default AddSchool;
