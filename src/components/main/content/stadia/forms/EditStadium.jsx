import { useState } from "react";
import { useSelector } from "react-redux/es/exports";

const EditStadium = ({ onEdit }) => {
  const item = useSelector((state) => state.stadia.item);
  const cities = useSelector((state) => state.cities.items);

  let cityOptions = [];
  cityOptions = cities.map((x) => {
    return (
      <option key={x.cityId} value={x.cityId}>
        {x.name}
      </option>
    );
  });

 const [name, setName] = useState(item.name);
 const [cityId, setCityId] = useState(cities[0].cityId);
 const [capacity, setCapacity] = useState(item.capacity);
 const [latitude, setLatitude] = useState(item.latitude);
 const [longitude, setLongitude] = useState(item.longitude);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEdit({
      stadiumId: item.stadiumId,
      name,
      cityId,
      capacity,
      latitude,
      longitude,
    });
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Edit Stadium</h5>
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
          Capacity
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Capacity"
          value={capacity}
          onChange={(e) => setCapacity(parseInt(e.target.value))}
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
      <hr></hr>
      <input
        type="submit"
        value="Save Stadium"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default EditStadium;
