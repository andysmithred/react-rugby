import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import InputString from "../../common/inputs/InputString";
import InputNumber from "../../common/inputs/InputNumber";
import InputSelect from "../../common/inputs/InputSelect";
import InputCheckbox from "../../common/inputs/InputCheckbox";


const EditCity = ({ onEdit }) => {
  const regions = useSelector((state) => state.regions.items);
  const city = useSelector((state) => state.cities.item);

  const [name, setName] = useState(city.name);
  const [population, setPopulation] = useState(city.population);
  const [latitude, setLatitude] = useState(city.latitude);
  const [longitude, setLongitude] = useState(city.longitude);
  const [zoom, setZoom] = useState(city.zoom);
  const [regionId, setRegionId] = useState(city.regionId);
  const [isCapital, setIsCapital] = useState(city.isCapital);
  const [complete, setComplete] = useState(city.complete);

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

    const updatedCity = {
      cityId: city.cityId,
      name,
      population,
      latitude,
      longitude,
      zoom: zoom ? zoom : 10,
      regionId,
      isCapital,
      complete,
    };
    onEdit(updatedCity);
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Edit City</h5>
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

export default EditCity;
