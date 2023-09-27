import { useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import Map, { MODES } from "./component/map";
import { getLocation } from "./utils/geo";
import ContactForm from "./component/ScamForm";
import Autocomplete from "./component/Autocomplete/Autocomplete";
import SignUpForm from "./component/SignUpForm";

const defaultCenter = {
  lat: 51.5,
  lng: 0.118092,
};

const libraries = ["places"];

const App = () => {
  const navigate = useNavigate();

  const [center, setCenter] = useState(defaultCenter);
  const [mode, setMode] = useState(MODES.MOVE);
  const [markers, setMarkers] = useState([]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    // mapIds: [process.env.REACT_APP_MAP_ID],
    libraries,
  });

  const onPlaceSelect = useCallback(
    (coords) => {
      setCenter(coords);
    },
    [markers]
  );

  const toggleMode = useCallback(() => {
    switch (mode) {
      case MODES.MOVE:
        setMode(MODES.SET_MARKER);
        break;
      case MODES.SET_MARKER:
        setMode(MODES.MOVE);
        break;
      default:
        setMode(MODES.MOVE);
    }
  }, [mode]);

  const onMarkerAdd = useCallback(
    (coords) => {
      setMarkers([...markers, coords]);
    },
    [markers]
  );

  const clearMarkers = useCallback(() => {
    setMarkers([]);
  }, []);

  useEffect(() => {
    getLocation()
      .then((curLoc) => {
        setCenter(curLoc);
        console.log("curLoc", curLoc);
      })
      .catch((defaultLocation) => {
        setCenter(defaultLocation);
      });
  }, []);

  return (
    <div className="App">
      <div className="addressSearchContainer">
        <Link to="/">Home</Link>
        <Link to="/report-scam">Report scam</Link>
        <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
        <button onClick={toggleMode}>
          {mode === MODES.MOVE ? "Set markers" : "Move map"}
        </button>
        <button onClick={clearMarkers}>Clear</button>
      </div>
      {isLoaded ? (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <Map
                  center={center}
                  mode={mode}
                  markers={markers}
                  onMarkerAdd={onMarkerAdd}
                />
              }
            />
            <Route path="/report-scam" element={<ContactForm />} />
          </Routes>
          <ContactForm />
          <SignUpForm />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default App;
