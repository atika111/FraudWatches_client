import { MarkerF } from "@react-google-maps/api";
import icon from "../assets/gold.png";

const customMarkerIcon = {
  url: icon,
  // scaledSize: new window.google.maps.Size(40, 40),
};

const Marker = ({ position, onClick }) => {
  return (
    <MarkerF position={position} onClick={onClick} icon={customMarkerIcon} />
  );
};

export default Marker;
