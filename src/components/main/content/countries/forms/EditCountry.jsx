import { useState } from "react";
import { useSelector } from "react-redux/es/exports";

const EditCountry = ({ onEditCountry }) => {
  const country = useSelector((state) => state.countries.selected);

  const [name, setName] = useState(country.name);
  const [fullName, setFullName] = useState(country.fullName);
  const [population, setPopulation] = useState(country.population);
  const [area, setArea] = useState(country.area);
  const [flagUrl, setFlagUrl] = useState(country.flagUrl);
  const [highestPoint, setHighestPoint] = useState(country.highestPoint);
  const [highestPointName, setHighestPointName] = useState(
    country.highestPointName
  );
  const [isoCode, setIsoCode] = useState(country.isoCode);
  const [resolution, setResolution] = useState(country.resolution);
  const [coastline, setCoastline] = useState(country.coastline);
  const [landBoundries, setLandBoundries] = useState(country.landBoundries);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEditCountry({
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
    });
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Edit Region</h5>
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
        <span className="input-group-text bg-dark text-white w-25">
          Full Name
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Population
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Population"
          value={population}
          onChange={(e) => setPopulation(parseInt(e.target.value))}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">Area</span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Area"
          value={area}
          onChange={(e) => setArea(parseInt(e.target.value))}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">Flag</span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Flag"
          value={flagUrl}
          onChange={(e) => setFlagUrl(e.target.value)}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Highest Point
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Highest Point"
          value={highestPoint}
          onChange={(e) => setHighestPoint(parseInt(e.target.value))}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Highest Point Name
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Highest Point Name"
          value={highestPointName}
          onChange={(e) => setHighestPointName(e.target.value)}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          ISO Code
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add ISO Code"
          value={isoCode}
          onChange={(e) => setIsoCode(e.target.value)}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Resolution
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Resolution"
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Coastline
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Coastline"
          value={coastline}
          onChange={(e) => setCoastline(parseInt(e.target.value))}
        />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">
          Land Boundries
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Land Boundries"
          value={landBoundries}
          onChange={(e) => setLandBoundries(parseInt(e.target.value))}
        />
      </div>
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
