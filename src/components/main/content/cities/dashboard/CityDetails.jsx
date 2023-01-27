import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import "./CityDetails.css";

const CityDetails = ({ city }) => {
  return (
    <div className="pt-1 mb-1 city-details">
      <DetailsHeader icon={getFullPathImage("info")} label="Details" />

      <div className="row ms-1">
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ID</div>
          <div className="value">{city.cityId}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">NAME</div>
          <div className="value">{city.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">REGION</div>
          <div className="value">{city.region.name}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">COUNTRY</div>
          <div className="value">{city.region.country}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">LATITUDE</div>
          <div className="value">{city ? city.latitudeDegrees : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">LONGITUDE</div>
          <div className="value">{city ? city.longitudeDegrees : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">POPULATION</div>
          <div className="value">
            {city.population ? city.population.toLocaleString("en-GB") : "--"}
          </div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ELEVATION</div>
          <div className="value">
            {city.elevation
              ? Math.round(city.elevation.results[0].elevation) + "m"
              : "--"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
