import { useState } from "react";
import { useSelector } from "react-redux";
import InputDecimal from "../../common/InputDecimal";
import InputCheckbox from "../../common/InputCheckbox";
import InputString from "../../common/InputString";
import InputNumber from "../../common/InputNumber";
import InputSelect from "../../common/InputSelect";
import InputDate from "../../common/InputDate";

const AddPlayer = ({ onAdd }) => {
  const cities = useSelector((state) => state.cities.items);

  let cityOptions = [];
  cityOptions = cities.map((x) => {
    return (
      <option key={x.cityId} value={x.cityId}>
        {x.name}
      </option>
    );
  });
  cityOptions.unshift(<option value=""></option>);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [springbokNo, setSpringbokNo] = useState(undefined);
  const [dateOfBirth, setDateOfBirth] = useState(undefined);
  const [dateOfDeath, setDateOfDeath] = useState(undefined);
  const [weight, setWeight] = useState(undefined);
  const [height, setHeight] = useState(undefined);
  const [cityId, setCityId] = useState(undefined);
  // SchoolId
  // PositionId
  const [deceased, setDeceased] = useState(false);
  const [fullName, setFullName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const item = {
      firstName,
      lastName,
      springbokNo,
      dateOfBirth,
      dateOfDeath,
      weight,
      height,
      cityId: cityId ? cityId : null,
      positionId: 1,
      deceased,
      fullName
    };

    onAdd(item);
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Add Player</h5>
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
      <InputString
        label="Full Names"
        input={fullName}
        setInput={setFullName}
        placeholder="Add Full Names"
      />
      <InputNumber
        label="Number"
        input={springbokNo}
        setInput={setSpringbokNo}
        placeholder="Add Number"
      />
      <InputDate
        label="Date of Birth"
        input={dateOfBirth}
        setInput={setDateOfBirth}
      />
      <InputDate
        label="Date of Death"
        input={dateOfDeath}
        setInput={setDateOfDeath}
      />
      <InputSelect
        label="Place of Birth"
        input={cityId}
        setInput={setCityId}
        options={cityOptions}
      />
      <InputDecimal
        label="Weight"
        input={weight}
        setInput={setWeight}
        placeholder="Add Weight"
      />
      <InputDecimal
        label="Height"
        input={height}
        setInput={setHeight}
        placeholder="Add Height"
      />
      <InputCheckbox label="Deceased" input={deceased} setInput={setDeceased} />
      <hr></hr>
      <input
        type="submit"
        value="Save Player"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default AddPlayer;
