import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";

import "./CoachDetails.css";

const CoachDetails = ({ item }) => {
  return (
    <div className="pt-1 mb-1 coach-details">
      <DetailsHeader icon={getFullPathImage("info")} label="Details" />
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">FIRST NAME</div>
          <div className="value">{item.firstName}</div>
        </div>
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">LAST NAME</div>
          <div className="value">{item.lastName}</div>
        </div>
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">CITY</div>
          <div className="value">{item.city.name}</div>
        </div>
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">MATCHES</div>
          <div className="value">{item.numberMatchTeams}</div>
        </div>
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">ID</div>
          <div className="value">{item.coachId}</div>
        </div>
      </div>
    </div>
  );
};

export default CoachDetails;
