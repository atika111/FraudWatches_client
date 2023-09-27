import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

const Card = ({ scamTypes }) => {
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
    const handleStillThereClick = () => {
        console.log("User clicked 'Still There' button");
    };

    // Click event handler for the "I Don't See Scammers" button
    const handleDontSeeScammersClick = () => {
        console.log("User clicked 'I Don't See Scammers' button");
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
