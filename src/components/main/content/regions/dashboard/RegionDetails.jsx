import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import "./RegionDetails.css";

const RegionDetails = ({ region }) => {
  //   const territories = territoryString(item.territories);

  return (
    <div className="pt-1 mb-1 city-details">
      <DetailsHeader icon={getFullPathImage("info")} label="Details" />

      <div className="row ms-1">
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ID</div>
          <div className="value">{region.regionId}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">NAME</div>
          <div className="value">{region.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">COUNTRY</div>
          <div className="value">{region.country.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">CITIES</div>
          <div className="value">{region.numberCities}</div>
        </div>
      </div>

      {/* <div className="PlaceDetailsItem half">
          <div className="label">LOCAL NAME</div>
          <div className="value">
            {props.item
              ? props.item.localName
                ? props.item.localName
                : "--"
              : "--"}
          </div>
        </div>
        <div className="PlaceDetailsItem half">
          <div className="label">
            {item.territories.length > 1 ? "TERRITORIES" : "TERRITORY"}
          </div>
          <div className="value">{props.item ? territories : "--"}</div>
        </div>
        <div className="PlaceDetailsItem half">
          <div className="label">LATITUDE</div>
          <div className="value">
            {props.item ? props.item.latitudeDegrees : "--"}
          </div>
        </div>
        <div className="PlaceDetailsItem half">
          <div className="label">LONGITUDE</div>
          <div className="value">
            {props.item ? props.item.longitudeDegrees : "--"}
          </div>
        </div>
        <div className="PlaceDetailsItem half">
          <div className="label">ID</div>
          <div className="value">{props.item ? props.item.id : "--"}</div>
        </div>
        <div className="PlaceDetailsItem half">
          <div className="label">ELEVATION</div>
          <div className="value">
            {item.elevation.results.length > 0
              ? Math.round(item.elevation.results[0].elevation) + "m"
              : "--"}
          </div>
        </div> */}
    </div>
  );
};

const territoryString = (territories) => {
  let first = true;
  let result = "";

  if (!territories && territories.length === 0) {
    return "--";
  }

  territories.forEach((territory) => {
    if (first) {
      result += territory.name;
      first = false;
    } else {
      result += ", " + territory.name;
    }
  });

  return result;
};

export default RegionDetails;
