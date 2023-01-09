import { useState } from "react";
import { useSelector } from "react-redux/es/exports";

const EditCoach = ({ onEdit }) => {
  const item = useSelector((state) => state.coaches.item);
  const cities = useSelector((state) => state.cities.items);

  let cityOptions = [];
  cityOptions = cities.map((x) => {
    return (
      <option key={x.cityId} value={x.cityId}>
        {x.name}
      </option>
    );
  });

  const [firstName, setFirstName] = useState(item.firstName);
  const [lastName, setLastName] = useState(item.lastName);
  const [cityId, setCityId] = useState(item.cityId);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEdit({
      coachId: item.coachId,
      firstName,
      lastName,
      cityId
    });
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Edit Coach</h5>
      </div>
      <hr></hr>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          First Name
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Last Name
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
      <hr></hr>
      <input
        type="submit"
        value="Save Coach"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default EditCoach;
