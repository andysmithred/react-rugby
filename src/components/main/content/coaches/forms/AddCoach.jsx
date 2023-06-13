import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import InputString from "../../common/inputs/InputString";
import InputSelect from "../../common/inputs/InputSelect";
import InputCheckbox from "../../common/inputs/InputCheckbox";


const AddCoach = ({ onAdd }) => {
  const cities = useSelector((state) => state.cities.items);

  let options = [];
  options = cities.map((x) => {
    return (
      <option key={x.cityId} value={x.cityId}>
        {x.name}
      </option>
    );
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cityId, setCityId] = useState(cities[0].cityId);
  const [complete, setComplete] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const item = {
        firstName,
        lastName,
        cityId,
        complete
    };

    onAdd(item);
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Add Coach</h5>
      </div>
      <hr></hr>
      <InputString
        label="First Name"
        input={firstName}
        setInput={setFirstName}
        placeholder="Add First Name"
      />
      <InputString
        label="Last Name"
        input={lastName}
        setInput={setLastName}
        placeholder="Add Last Name"
      />
      <InputSelect
        label="City"
        input={cityId}
        setInput={setCityId}
        options={options}
      />
      <InputCheckbox label="Complete" input={complete} setInput={setComplete} />
      <hr></hr>
      <input
        type="submit"
        value="Save Coach"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default AddCoach;
