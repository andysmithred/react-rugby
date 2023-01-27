import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback, memo, useMemo } from "react";
// import { styles } from "./MapStyles";

import "./MapContainer.css";

const containerStyle = {
  width: "100%",
  height: "100%",
};


const MapContainer = ({ latitude, longitude, zoom }) => {
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc",
    });

    const center = useMemo(() => { 
        return {
            lat: latitude, 
            lng: longitude 
        };
    }, [latitude, longitude]);

    const [map, setMap] = useState(null);

    const onLoad = useCallback((map) => {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      // const bounds = new window.google.maps.LatLngBounds(center);
      // map.fitBounds(bounds);
      map.setZoom(zoom);
      setMap(map);
    }, [zoom]);

    const onUnmount = useCallback((map) => {
      setMap(null);
    }, []);

    return isLoaded ? (
        <div className="map-container">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={7}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {/* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </div>) : (
      <></>
    );
}

export default memo(MapContainer);



