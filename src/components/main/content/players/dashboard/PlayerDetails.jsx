import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";

import "./PlayerDetails.css";

const PlayerDetails = ({ item }) => {

  const convertDate = date => {
    return new Date(date).toDateString();
  }

  return (
    <div className="pt-1 mb-1 player-details">
      <DetailsHeader icon={getFullPathImage("info")} label="Details" />
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 player-details-item">
          <div className="label">FIRST NAME</div>
          <div className="value">{item.firstName}</div>
        </div>
        <div className="col-lg-6 pt-2 player-details-item">
          <div className="label">LAST NAME</div>
          <div className="value">{item.lastName}</div>
        </div>
        <div className="col-lg-6 pt-2 player-details-item">
          <div className="label">FULL NAME</div>
          <div className="value">{item.fullName}</div>
        </div>
        <div className="col-lg-6 pt-2 player-details-item">
          <div className="label">NUMBER</div>
          <div className="value">
            {item.springbokNo ? item.springbokNo : "--"}
          </div>
        </div>
        <div className="col-lg-6 pt-2 player-details-item">
          <div className="label">DATE OF BIRTH</div>
          <div className="value">
            {item.dateOfBirth ? convertDate(item.dateOfBirth) : "--"}
          </div>
        </div>
        <div className="col-lg-6 pt-2 player-details-item">
          <div className="label">DIED</div>
          <div className="value">
            {item.dateOfDeath ? convertDate(item.dateOfDeath) : "--"}
          </div>
        </div>
        <div className="col-lg-6 pt-2 player-details-item">
          <div className="label">DECEASED</div>
          <div className="value">{item.deceased ? "Yes" : "No"}</div>
        </div>
        <div className="col-lg-6 pt-2 player-details-item">
          <div className="label">PLACE OF BIRTH</div>
          <div className="value">{item.city ? item.city.name : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 player-details-item">
          <div className="label">WEIGHT</div>
          <div className="value">{item.weight ? item.weight : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 player-details-item">
          <div className="label">HEIGHT</div>
          <div className="value">{item.height ? item.height : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 player-details-item">
          <div className="label">ID</div>
          <div className="value">{item.playerId}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
