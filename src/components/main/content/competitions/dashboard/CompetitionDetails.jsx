import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";

import "./CompetitionDetails.css";

const CompetitionDetails = ({ item }) => {
  return (
    <div className="pt-1 mb-1">
      <DetailsHeader icon={getFullPathImage("info")} label="Details" />
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 competition-details-item">
          <div className="label">NAME</div>
          <div className="value">{item.name}</div>
        </div>
        <div className="col-lg-6 pt-2 competition-details-item">
          <div className="label">MATCHES</div>
          <div className="value">{item.numberMatches}</div>
        </div>
        <div className="col-lg-6 pt-2 competition-details-item">
          <div className="label">ID</div>
          <div className="value">{item.competitionId}</div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionDetails;
