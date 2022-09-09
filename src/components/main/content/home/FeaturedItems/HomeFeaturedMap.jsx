import { Map, GoogleApiWrapper } from "google-maps-react";
//import { styles } from "./FeaturedMapStyles";

import "./HomeFeaturedMap.css";


const HomeFeaturedMap = ({place, google}) => {
    return (
      <div className="home-featured-map">
        <Map
          google={google}
          initialCenter={{ lat: place.latitude, lng: place.longitude }}
          center={{ lat: place.latitude, lng: place.longitude }}
          zoom={place.zoom}
          //styles={styles}
          containerStyle={{
            width: "30.5vw",
            height: "39vh",
            position: "absolute",
          }}
        />
      </div>
    );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc",
})(HomeFeaturedMap);
