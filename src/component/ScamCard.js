import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { getAddressFromCoordinates } from "../utils/getCountry";

const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short",
};

const Card = ({ scamTypes, markers, setMarkers }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const marker = location.state?.marker;
  const date = new Date(marker.dateTime);
  const scamType = scamTypes.find((type) => (type._id = marker.scamTypeId));
  const advice = scamType.advice;
  const scamTypeName = scamType.name;

  const [position, setPosition] = useState();

  useEffect(() => {
    const getPosition = async () => {
      try {
        const pos = await getAddressFromCoordinates(
          marker.position.lat,
          marker.position.lng
        );
        setPosition(pos);
      } catch (error) {
        console.error("Error getting position:", error);
      }
    };

    getPosition(); // Call the async function
  }, [marker]);

  // Click event handler for the "Still There" button
  const handleStillThereClick = async () => {
    console.log("User clicked 'Still There' button");
    const res = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/isThereRating/${marker._id}`,
      {
        isConfirmed: 1,
      }
    );
    console.log("res", res);
  };

  // Click event handler for the "I Don't See Scammers" button
  const handleDontSeeScammersClick = async () => {
    console.log("User clicked 'I Don't See Scammers' button");
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/isThereRating/${marker._id}`,
        {
          isConfirmed: 0,
        }
      );
      console.log("res", res);
    } catch (error) {
      if (error.request.status === 404) {
        const updatedMarkers = markers.filter((m) => m._id !== marker._id);
        setMarkers(updatedMarkers);
        navigate("/");
      }
    }
  };

  return (
    <div className="card">
      <h2 className="card-title">{scamTypeName}</h2>
      <div className="card-info">
        <p>Location: {position}</p>
        <p>
          Time of Committing: {date.toLocaleDateString("en-US", dateOptions)}
        </p>
        <p>Advice: {advice}</p>
      </div>
      <div className="card-buttons">
        <button className="subButton" onClick={handleStillThereClick}>
          Still There
        </button>
        <button className="subButton" onClick={handleDontSeeScammersClick}>
          I Don't See Scammers
        </button>
      </div>
    </div>
  );
};

export default Card;
