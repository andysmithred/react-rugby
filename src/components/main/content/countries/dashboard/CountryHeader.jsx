import { getFullFlagImage, getFullPathImage } from "../../../../utils/ImageDetails";
import "./CountryHeader.css";

const CountryHeader = ({ country }) => {

  let icon = undefined;
  let label = undefined;

  if (country.complete) {
    icon = getFullPathImage("lock");
    label = "locked";
  } else {
    icon = getFullPathImage("unlock");
    label = "unlocked";
  }

  return (
    <div className="d-flex flex-row country-header">
      <img
        src={getFullFlagImage(country.flagUrl)}
        className="mb-1 image"
        alt={country.name}
      />
      <div className="ms-3 mt-3 label">{country.name}</div>
      {/* <div className="ms-auto me-2 mt-3 label">{country.fullName}</div> */}
      <img
        src={icon}
        className="ms-auto me-2 mt-3 complete"
        alt={label}
      />
    </div>
  );
};

export default CountryHeader;
