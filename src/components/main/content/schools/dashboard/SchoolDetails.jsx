import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";

import "./SchoolDetails.css";

const SchoolDetails = ({ school }) => {
  return (
    <div className="pt-1 mb-1 school-details">
      <DetailsHeader icon={getFullPathImage("info")} label="Details" />
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 school-details-item">
          <div className="label">ID</div>
          <div className="value">{school.schoolId}</div>
        </div>
        <div className="col-lg-6 pt-2 school-details-item">
          <div className="label">NAME</div>
          <div className="value">{school.name}</div>
        </div>
        <div className="col-lg-6 pt-2 school-details-item">
          <div className="label">COUNTRY</div>
          <div className="value">{school.city.name}</div>
        </div>
        <div className="col-lg-6 pt-2 school-details-item">
          <div className="label">FOUNDED</div>
          <div className="value">{school.founded}</div>
        </div>
        <div className="col-lg-6 pt-2 school-details-item">
          <div className="label">TYPE</div>
          <div className="value">{school.schoolType.type}</div>
        </div>
        <div className="col-lg-6 pt-2 school-details-item">
          <div className="label">PLAYERS</div>
          <div className="value">{school.numberPlayers}</div>
        </div>
        <div className="col-lg-6 pt-2 school-details-item">
          <div className="label">LATITUDE</div>
          <div className="value">{school.latitude}</div>
        </div>
        <div className="col-lg-6 pt-2 school-details-item">
          <div className="label">LONGITUDE</div>
          <div className="value">{school.longitude}</div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetails;
