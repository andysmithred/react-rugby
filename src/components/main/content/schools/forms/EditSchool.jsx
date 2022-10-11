import { useState } from "react";
import { useSelector } from "react-redux/es/exports";

const EditSchool = ({ onEdit }) => {
  const school = useSelector((state) => state.schools.selected);
  const cities = useSelector((state) => state.cities.items);
  const schoolTypes = useSelector(state => state.schoolTypes.items);

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

  const [name, setName] = useState(school.name);
  const [cityId, setCityId] = useState(school.cityId);
  const [founded, setFounded] = useState(school.founded);
  const [type, setType] = useState(school.schoolTypeId);
  const [latitude, setLatitude] = useState(school.latitude);
  const [longitude, setLongitude] = useState(school.longitude);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEdit({ 
        schoolId: school.schoolId, 
        name,
        cityId,
        founded,
        type,
        latitude,
        longitude
    });
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Edit School</h5>
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

export default EditSchool;
