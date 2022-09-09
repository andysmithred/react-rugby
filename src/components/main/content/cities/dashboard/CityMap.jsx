import DetailsHeader from "../../common/DetailsHeader";
// import MapContainer from "./MapContainer";
import "./CityMap.css";

const CityMap = (props) => {
  return (
    <div className="pt-1 me-1 city-map">
        <DetailsHeader icon={props.icon} label={props.label} />
        <div>MAP</div>
        {/* <MapContainer city={props.city} /> */}
    </div>
  );
};

export default CityMap;
