import DetailsHeader from "../../common/DetailsHeader";
import { getFullPathImage } from "../../../../utils/ImageDetails";
import "./CountryDetails.css";

const CountryDetails = ({ country }) => {
  return (
    <div className="pt-1 mb-1 country-details">
      <DetailsHeader icon={getFullPathImage("info")} label="Details" />

      <div className="row ms-1">
        <div className="col-lg-6 pt-2 country-details-item">
          <div className="label">NAME</div>
          <div className="value">{country.name}</div>
        </div>
        <div className="col-lg-6 pt-2 country-details-item">
          <div className="label">FULL NAME</div>
          <div className="value">{country.fullName}</div>
        </div>
        <div className="col-lg-6 pt-2 country-details-item">
          <div className="label">ID</div>
          <div className="value">{country.countryId}</div>
        </div>
        <div className="col-lg-6 pt-2 country-details-item">
          <div className="label">REGIONS</div>
          <div className="value">{country.numberRegions}</div>
        </div>
        <div className="col-lg-6 pt-2 country-details-item">
          <div className="label">POPULATION</div>
          <div className="value">
            {country.population ? country.population : "--"}
          </div>
        </div>
        <div className="col-lg-6 pt-2 country-details-item">
          <div className="label">AREA</div>
          <div className="value">{country.area ? country.area : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 country-details-item">
          <div className="label">HIGHEST POINT</div>
          <div className="value">
            {country.highestPoint ? country.highestPoint : "--"}
          </div>
        </div>
        <div className="col-lg-6 pt-2 country-details-item">
          <div className="label">HIGHEST POINT NAME</div>
          <div className="value">
            {country.highestPointName ? country.highestPointName : "--"}
          </div>
        </div>
        <div className="col-lg-6 pt-2 country-details-item">
          <div className="label">ISO Code</div>
          <div className="value">
            {country.isoCode ? country.isoCode : "--"}
          </div>
        </div>
        <div className="col-lg-6 pt-2 country-details-item">
          <div className="label">COASTLINE</div>
          <div className="value">
            {country.coastline ? country.coastline : "--"}
          </div>
        </div>
        <div className="col-lg-6 pt-2 country-details-item">
          <div className="label">LAND BOUNDRIES</div>
          <div className="value">
            {country.landBoundries ? country.landBoundries : "--"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
