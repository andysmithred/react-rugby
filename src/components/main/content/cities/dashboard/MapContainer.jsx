import { Map, GoogleApiWrapper } from "google-maps-react";
import "./MapContainer.css";

const MapContainer = ({ city, google }) => {
    return (
      <div className="map-container">
        <Map
          google={google}
          initialCenter={{ lat: city.latitude, lng: city.longitude }}
          center={{ lat: city.latitude, lng: city.longitude }}
          zoom={city.zoom}
        //   styles={styles}
          containerStyle={{
            width: "48.25vw",
            height: "65vh",
            position: "absolute",
          }}
        />
      </div>
    );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc",
})(MapContainer);
