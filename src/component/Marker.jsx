import { MarkerF } from "@react-google-maps/api";
import blue from "../assets/blue.png";
import gold from "../assets/gold.png";
import green from "../assets/green.png";
import magenta from "../assets/magenta.png";
import red from "../assets/red.png";

const markerImages = {
  blue: blue,
  gold: gold,
  green: green,
  magenta: magenta,
  red: red,
};

const Marker = ({ position, onClick, color }) => {
  const imageUrl = markerImages[color] || markerImages.red;

  const customMarkerIcon = {
    url: imageUrl,
    // scaledSize: new window.google.maps.Size(40, 40),
  };
  return (
    <MarkerF position={position} onClick={onClick} icon={customMarkerIcon} />
  );
};

export default Marker;
