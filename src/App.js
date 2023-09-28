import { useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import {
  useNavigate,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Map, { MODES } from "./component/map";
import axios from "axios";
import { getLocation } from "./utils/geo";
import ContactForm from "./component/ScamForm";
import Autocomplete from "./component/Autocomplete/Autocomplete";
import SignUpForm from "./component/SignUpForm";
import LoginForm from "./component/LoginForm";
import Card from "./component/ScamCard";
import NavBar from "./component/NavBar";
import "./App.css";
import OpeningPage from "./component/OpeningPage";

const defaultCenter = {
  lat: 51.5,
  lng: 0.118092,
};

const libraries = ["places"];

const colors = ["blue", "gold", "green", "magenta", "red"];
const scamTypeColorMap = {};
const assignColorToScamType = (scamTypeId) => {
  if (!scamTypeColorMap[scamTypeId]) {
    // Use modulo to cycle through available colors
    const color = colors[Object.keys(scamTypeColorMap).length % colors.length];
    scamTypeColorMap[scamTypeId] = color;
  }
  return scamTypeColorMap[scamTypeId];
};

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [center, setCenter] = useState(defaultCenter);
  const [mode, setMode] = useState(MODES.MOVE);
  const [showLoading, setShowLopading] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [user, setUser] = useState();
  const [scamTypes, setScamTypes] = useState([]);

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
      navigate("/report-scam", { state: { coords } });
    },
    [markers, navigate]
  );

  const clearMarkers = useCallback(() => {
    setMarkers([]);
  }, []);

  const fetchAllScams = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/scams`);
    const scamsWithColors = res.data.map((scam) => ({
      ...scam,
      color: assignColorToScamType(scam.scamTypeId),
    }));
    setMarkers(scamsWithColors);
  };

  const fetchScamTypes = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/scamtypes`
    );

    setScamTypes(res.data.data);
  };

  useEffect(() => {
    getLocation()
      .then((curLoc) => {
        setCenter(curLoc);
        console.log("curLoc", curLoc);
      })
      .catch((defaultLocation) => {
        setCenter(defaultLocation);
      });
    setTimeout(() => {
      setShowLopading(false);
    }, 3500);
    fetchAllScams();
    fetchScamTypes();
  }, []);

  return showLoading ? (
    <OpeningPage />
  ) : (
    <div className="App">
      <NavBar />
      {isLoaded ? (
        <>
          <Routes>
            <Route
              path="/report-scam"
              element={
                <ContactForm
                  user={user}
                  scamTypes={scamTypes}
                  setMarkers={setMarkers}
                  markers={markers}
                />
              }
            />{" "}
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm setUser={setUser} />} />
            <Route
              path="/scamform"
              element={<ContactForm user={user} scamTypes={scamTypes} />}
            />
            <Route
              path="/scamcard"
              element={
                <Card
                  scamTypes={scamTypes}
                  setMarkers={setMarkers}
                  markers={markers}
                />
              }
            />
          </Routes>

          {location.pathname === "/" && (
            <>
              <Autocomplete
                className="autocomplete"
                isLoaded={isLoaded}
                onSelect={onPlaceSelect}
                style={{ fontFamily: 'ysabeau' }}
              />
              <button
                className="toggle-button button-corner"
                onClick={toggleMode}
              >
                {mode === MODES.MOVE ? "Set markers" : "Move map"}
              </button>
              <Map
                className="map"
                center={center}
                mode={mode}
                markers={markers}
                onMarkerAdd={onMarkerAdd}
              />
            </>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default App;
