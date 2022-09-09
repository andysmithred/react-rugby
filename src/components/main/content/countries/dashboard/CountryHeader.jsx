import { getFullFlagImage } from "../../../../utils/ImageDetails";
import "./CountryHeader.css";

const CountryHeader = ({ country }) => {
  return (
    <div className="d-flex flex-row country-header">
      <img
        src={getFullFlagImage(country.flagUrl)}
        className="mb-1 image"
        alt={country.name}
      />
      <div className="ms-3 mt-3 label">{country.name}</div>
      <div className="ms-auto me-2 mt-3 label">{country.fullName}</div>
    </div>
  );
};

export default CountryHeader;
