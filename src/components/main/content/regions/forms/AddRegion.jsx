import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import InputString from "../../common/inputs/InputString";
import InputSelect from "../../common/inputs/InputSelect";
import InputCheckbox from "../../common/inputs/InputCheckbox";

const AddRegion = ({ onAdd }) => {
  const countries = useSelector((state) => state.countries.items);

  const [name, setName] = useState("");
  const [countryId, setCountryId] = useState(countries[0].countryId);
  const [complete, setComplete] = useState(false);

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
    onAdd({ name, countryId, complete });
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Add Region</h5>
      </div>
      <hr></hr>
      <InputString
        label="Name"
        input={name}
        setInput={setName}
        placeholder="Add Name"
      />
      <InputSelect
        label="Country"
        input={countryId}
        setInput={setCountryId}
        options={options}
      />
      <InputCheckbox label="Complete" input={complete} setInput={setComplete} />
      <hr></hr>
      <input
        type="submit"
        value="Save Region"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default AddRegion;
