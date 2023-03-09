import { useState } from "react";
import InputString from "../../common/inputs/InputString";
import InputNumber from "../../common/inputs/InputNumber";
import InputCheckbox from "../../common/inputs/InputCheckbox";

const AddCountry = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [population, setPopulation] = useState(undefined);
  const [area, setArea] = useState(undefined);
  const [flagUrl, setFlagUrl] = useState("");
  const [highestPoint, setHighestPoint] = useState(undefined);
  const [highestPointName, setHighestPointName] = useState("");
  const [isoCode, setIsoCode] = useState("");
  const [resolution, setResolution] = useState("");
  const [coastline, setCoastline] = useState(undefined);
  const [landBoundries, setLandBoundries] = useState(undefined);
  const [complete, setComplete] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAdd({
      name,
      fullName,
      population,
      area,
      flagUrl,
      highestPoint,
      highestPointName,
      isoCode,
      resolution,
      coastline,
      landBoundries,
      complete
    });
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Add Country</h5>
      </div>
      <hr></hr>
      <InputString
        label="Name"
        input={name}
        setInput={setName}
        placeholder="Add Name"
      />
      <InputString
        label="Full Name"
        input={fullName}
        setInput={setFullName}
        placeholder="Add Full Name"
      />
      <InputNumber
        label="Population"
        input={population}
        setInput={setPopulation}
        placeholder="Add Population"
      />
      <InputNumber
        label="Area"
        input={area}
        setInput={setArea}
        placeholder="Add Area"
      />
      <InputString
        label="Flag"
        input={flagUrl}
        setInput={setFlagUrl}
        placeholder="Add Flag"
      />
      <InputNumber
        label="Highest Point"
        input={highestPoint}
        setInput={setHighestPoint}
        placeholder="Add Highest Point"
      />
      <InputString
        label="Highest Point Name"
        input={highestPointName}
        setInput={setHighestPointName}
        placeholder="Add Highest Point Name"
      />
      <InputString
        label="ISO Code"
        input={isoCode}
        setInput={setIsoCode}
        placeholder="Add ISO Code"
      />
      <InputString
        label="Resolution"
        input={resolution}
        setInput={setResolution}
        placeholder="Add Resolution"
      />
      <InputNumber
        label="Coastline"
        input={coastline}
        setInput={setCoastline}
        placeholder="Add Coastline"
      />
      <InputNumber
        label="Land Boundries"
        input={landBoundries}
        setInput={setLandBoundries}
        placeholder="Add Land Boundries"
      />
      <InputCheckbox label="Complete" input={complete} setInput={setComplete} />
      <hr></hr>
      <input
        type="submit"
        value="Save Country"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default AddCountry;
