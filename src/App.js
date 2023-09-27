import { useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
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
    setMarkers(res.data);
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

    fetchAllScams();
    fetchScamTypes();
  }, []);

  return (
    <div className="App">
      <NavBar />

      {isLoaded ? (
        <>
          <Routes>
            <Route path="/report-scam" element={<ContactForm />} />{" "}
            {/*  map with all the scams  */}
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/scamform" element={<ContactForm />} />
            <Route path="/scamcard" element={<Card scamTypes={scamTypes} />} />
          </Routes>

          <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
          <button onClick={toggleMode}>
            {mode === MODES.MOVE ? "Set markers" : "Move map"}
          </button>
          <button onClick={clearMarkers}>Clear</button>
          <Map
            center={center}
            mode={mode}
            markers={markers}
            onMarkerAdd={onMarkerAdd}
          />
          <ContactForm user={user} />
          <LoginForm setUser={setUser} />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default App;
