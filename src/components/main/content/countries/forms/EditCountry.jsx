import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import InputString from "../../common/inputs/InputString";
import InputNumber from "../../common/inputs/InputNumber";
import InputCheckbox from "../../common/inputs/InputCheckbox";

const EditCountry = ({ onEdit }) => {
  const country = useSelector((state) => state.countries.item);

  const [name, setName] = useState(country.name);
  const [fullName, setFullName] = useState(country.fullName);
  const [population, setPopulation] = useState(country.population);
  const [area, setArea] = useState(country.area);
  const [flagUrl, setFlagUrl] = useState(country.flagUrl);
  const [highestPoint, setHighestPoint] = useState(country.highestPoint);
  const [highestPointName, setHighestPointName] = useState(
    country.highestPointName
  );
  const [isoCode, setIsoCode] = useState(country.isocode);
  const [resolution, setResolution] = useState(country.resolution);
  const [coastline, setCoastline] = useState(country.coastline);
  const [landBoundries, setLandBoundries] = useState(country.landBoundries);
  const [complete, setComplete] = useState(country.complete);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEdit({
      countryId: country.countryId,
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
        <h5>Edit Country</h5>
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

export default EditCountry;
