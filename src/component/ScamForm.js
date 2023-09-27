import { useState } from "react";
import { useLocation } from "react-router-dom";
import AutocompleteInput from "./AutocompleteInput";

const ContactForm = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const location = useLocation();
  const coords = location.state?.coords;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with the selectedPlace data
    if (selectedPlace && selectedPlace.geometry) {
      // You can access place.geometry safely here
      // For example:
      const location = selectedPlace.geometry.location;
      const lat = location.lat();
      const lng = location.lng();
      // Rest of your form submission logic
      console.log({ lat, lng });
    } else {
      // Handle the case when place is null or undefined
      console.error("Invalid place object");
    }
  };

  return (
    <div className="contact-form">
      <section>
        <form method="POST" onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <strong>Fill out the form below to report a fraud</strong>
            </legend>

            <label htmlFor="fraud_type">
              <strong>Fraud Type:</strong>
            </label>
            <select id="fraud_type" name="fraud_type" className="form-input">
              <option selected>Select one...</option>
              <option value="Pickpocketing">Pickpocketing</option>
              <option value="Advance Fee Fraud">Advance Fee Fraud</option>
              <option value="Door-to-Door Scam">Door-to-Door Scam</option>
              <option value="Fake Charity Scam">Fake Charity Scam</option>
              <option value="Street Performer Scam">
                I want to fly with you to see cool cities
              </option>
              <option value="other">Other</option>
            </select>
            <AutocompleteInput
              onSelectPlace={setSelectedPlace}
              initialCoords={coords}
            />

            <label htmlFor="comments">
              <strong>Tell me more about it:</strong>
            </label>
            <textarea
              id="comments"
              maxLength="250"
              name="comments"
              className="form-textarea"
            ></textarea>
            <p></p>

            <label htmlFor="date">
              <strong>Select a Date</strong>
            </label>
            <input type="date" id="date" name="date" className="form-input" />

            <label htmlFor="time">
              <strong>Select a Time</strong>
            </label>
            <input type="time" id="time" name="time" className="form-input" />

            <button>click on me!</button>

            <button disabled className="subButton" type="submit" value="Send">
              <strong>Submit</strong>
            </button>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
