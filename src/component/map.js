import { useCallback, useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { defaultTheme, darkTheme } from "../utils/theme";
import Marker from "./Marker";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

export const MODES = {
  MOVE: 0,
  SET_MARKER: 1,
};

const Map = ({ center, mode, markers, onMarkerAdd }) => {
  const mapRef = useRef();
  const navigate = useNavigate();

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const onClick = useCallback(
    (loc) => {
      if (mode === MODES.SET_MARKER) {
        const lat = loc.latLng.lat();
        const lng = loc.latLng.lng();

        onMarkerAdd({ lat, lng });
      }
    },
    [mode, onMarkerAdd]
  );

  const onMarkerClick = (marker) => {
    navigate("/scamcard", { state: { marker } });
  };

  return (
    <div style={{ height: "100vh" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
        onClick={onClick}
      >
        {markers.map((marker) => (
          <Marker
            position={marker.position}
            key={marker._id}
            color={marker.color}
            onClick={() => onMarkerClick(marker)}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
