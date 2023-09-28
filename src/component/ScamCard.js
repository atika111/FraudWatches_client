import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { getAddressFromCoordinates } from "../utils/getCountry";

const Card = ({ scamTypes, markers, setMarkers }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const marker = location.state?.marker;

    const [position, setPosition] = useState();
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [usersCommented, setUsersCommented] = useState([]);

    const formattedDatetime = formatDistanceToNow(new Date(marker.dateTime), {
        addSuffix: true,
    });

    const scamType = scamTypes.find((type) => (type._id = marker.scamTypeId));
    const advice = scamType?.advice || "Be careful!";
    const scamTypeName = scamType?.name || "";

    const getUserNickname = (userId) => {
        const user = usersCommented.find((user) => user._id === userId);
        return user ? user.nickname : "Unknown User";
    };

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

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/auth/usersByIds`,
                {
                    usersIds: marker.comments.map((c) => c.userId),
                }
            );
            setUsersCommented(res.data);
        };

        fetchUsers();
    }, [marker]);

    // Click event handler for the "Still There" button
    const handleStillThereClick = async () => {
        console.log("User clicked 'Still There' button");
        try {
            const res = await axios.put(
                `${process.env.REACT_APP_SERVER_URL}/isThereRating/${marker._id}`,
                {
                    isConfirmed: 1,
                }
            );
            console.log("res", res);
            setIsButtonClicked(true);
        } catch (error) {
            console.log(error);
        }
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
            setIsButtonClicked(true);
        } catch (error) {
            if (error.request.status === 404) {
                const updatedMarkers = markers.filter((m) => m._id !== marker._id);
                setMarkers(updatedMarkers);
                navigate("/");
            }
        }
    };

    return (
        <div className="contact-form">
            <section>
                <form>
                    <fieldset>
                        <legend>
                            <h2 className="card-title">{scamTypeName}</h2>
                        </legend>
                        <div className="card">
                            <div className="card-info">
                                <p><strong>Location:</strong> {position}</p>
                                <p><strong>Committed:</strong> {formattedDatetime}</p>
                                <p><strong>Advice:</strong> {advice}</p>
                            </div>
                            <ul className="emergency-numbers-list">
                                {Object.entries(marker.emergencyNumbers).map((n) =>
                                    n[1] ? (
                                        <li style={{ fontWeight: 'bold' }}>
                                            {n[0]}: {n[1]}
                                        </li>
                                    ) : null
                                )}
                            </ul>
                            <ul className="comments-list">
                                {marker.comments.map((c, index) => (
                                    <div key={index}>
                                        <li><strong>Comment:</strong> {c.text}</li>
                                        <li><strong>User:</strong> {getUserNickname(c.userId)}</li>
                                        <li style={{ fontStyle: 'italic' }}>
                                            {formatDistanceToNow(new Date(c.date), {
                                                addSuffix: true,
                                            })}
                                        </li>
                                    </div>
                                ))}
                            </ul>
                            <div className="card-buttons">
                                <button
                                    className="subButton"
                                    onClick={handleStillThereClick}
                                    disabled={isButtonClicked}
                                >
                                    Still There
                                </button>
                                <button
                                    className="subButton"
                                    onClick={handleDontSeeScammersClick}
                                    disabled={isButtonClicked}
                                >
                                    I Don't See Scammers
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section >
        </div >
    );
};

export default Card;
