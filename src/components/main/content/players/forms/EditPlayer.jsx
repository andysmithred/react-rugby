import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import InputString from "../../common/inputs/InputString";
import InputNumber from "../../common/inputs/InputNumber";
import InputDate from "../../common/inputs/InputDate";
import InputSelect from "../../common/inputs/InputSelect";
import InputDecimal from "../../common/inputs/InputDecimal";
import InputCheckbox from "../../common/inputs/InputCheckbox";

const EditPlayer = ({ onEdit }) => {
  const item = useSelector((state) => state.players.item);
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

  const [firstName, setFirstName] = useState(item.firstName);
  const [lastName, setLastName] = useState(item.lastName);
  const [springbokNo, setSpringbokNo] = useState(item.springbokNo);
  const [dateOfBirth, setDateOfBirth] = useState(item.dateOfBirth);
  const [dateOfDeath, setDateOfDeath] = useState(item.dateOfDeath);
  const [weight, setWeight] = useState(item.weight);
  const [height, setHeight] = useState(item.height);
  const [cityId, setCityId] = useState(item.cityId);
  // SchoolId
  // PositionId
  const [deceased, setDeceased] = useState(item.deceased);
  const [fullName, setFullName] = useState(item.fullName);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEdit({
      playerId: item.playerId,
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
      fullName,
    });
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Edit Player</h5>
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

export default EditPlayer;
