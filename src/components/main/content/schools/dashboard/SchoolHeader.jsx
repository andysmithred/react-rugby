import { getFullFlagImage } from "../../../../utils/ImageDetails";
import "./SchoolHeader.css";

const SchoolHeader = ({ school }) => {
  return (
    <div className="d-flex flex-row school-header">
      <img
        src={getFullFlagImage(school.flagUrl)}
        className="mb-1 image"
        alt={school.name}
      />
      <div className="ms-3 mt-3 label">{school.name}</div>
      <div className="ms-auto me-2 mt-3 label">{school.city.name}</div>
    </div>
  );
};

export default SchoolHeader;
