import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";

import "./StadiumDetails.css";

const StadiumDetails = ({ item }) => {
  return (
    <div className="pt-1 mb-1 coach-details">
      <DetailsHeader icon={getFullPathImage("info")} label="Details" />
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">NAME</div>
          <div className="value">{item.name}</div>
        </div>
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">CITY</div>
          <div className="value">{item.city.name}</div>
        </div>
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">CAPACITY</div>
          <div className="value">{item.capacity}</div>
        </div>
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">MATCHES</div>
          <div className="value">{item.numberMatches}</div>
        </div>
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">LATITUDE</div>
          <div className="value">{item.latitude}</div>
        </div>
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">LONGITUDE</div>
          <div className="value">{item.longitude}</div>
        </div>
        <div className="col-lg-6 pt-2 coach-details-item">
          <div className="label">ID</div>
          <div className="value">{item.stadiumId}</div>
        </div>
      </div>
    </div>
  );
};

export default StadiumDetails;
