import React from 'react';
import './ContactForm.css'; // Import your CSS file

const Card = () => {
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
            <h2 className="card-title">Art Scam</h2>
            <div className="card-info">
                <p>Location: Paris</p>
                <p>Time of Committing: 14:00 pm</p>
                <p>Advice: Be careful</p>
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
