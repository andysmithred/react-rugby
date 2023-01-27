import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import InputString from "../../common/inputs/InputString";
import InputNumber from "../../common/inputs/InputNumber";
import InputSelect from "../../common/inputs/InputSelect";
import InputCheckbox from "../../common/inputs/InputCheckbox";

const AddCity = ({ onAdd }) => {
  const regions = useSelector((state) => state.regions.items);

  const [name, setName] = useState("");
  const [population, setPopulation] = useState(undefined);
  const [latitude, setLatitude] = useState(undefined);
  const [longitude, setLongitude] = useState(undefined);
  const [zoom, setZoom] = useState(undefined);
  const [regionId, setRegionId] = useState(regions[0].regionId);
  const [isCapital, setIsCapital] = useState(false);
  const [complete, setComplete] = useState(false);

  let options = [];
  options = regions.map((r) => {
    return (
      <option key={r.regionId} value={r.regionId}>
        {r.name}
      </option>
    );
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const city = {
      name,
      population,
      latitude,
      longitude,
      zoom: zoom ? zoom : 10,
      regionId,
      isCapital,
      complete
    };

    onAdd(city);
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Add City</h5>
      </div>
      <hr></hr>
      <InputString
        label="Name"
        input={name}
        setInput={setName}
        placeholder="Add Name"
      />
      <InputNumber
        label="Population"
        input={population}
        setInput={setPopulation}
        placeholder="Add Population"
      />
      <InputString
        label="Latitude"
        input={latitude}
        setInput={setLatitude}
        placeholder="Add Latitude"
      />
      <InputString
        label="Longitude"
        input={longitude}
        setInput={setLongitude}
        placeholder="Add Longitude"
      />
      <InputNumber
        label="Zoom"
        input={zoom}
        setInput={setZoom}
        placeholder="Add Zoom"
      />
      <InputSelect
        label="Region"
        input={regionId}
        setInput={setRegionId}
        options={options}
      />
      <InputCheckbox
        label="Is Capital"
        input={isCapital}
        setInput={setIsCapital}
      />
      <InputCheckbox label="Complete" input={complete} setInput={setComplete} />
      <hr></hr>
      <input
        type="submit"
        value="Save City"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default AddCity;
