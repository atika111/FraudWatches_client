import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import AutocompleteInput from "./AutocompleteInput";
import OpeningPage from "./OpeningPage";

const ContactForm = ({ user, scamTypes, markers, setMarkers }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const location = useLocation();
  const coords = location.state?.coords;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      if (selectedPlace && selectedPlace.geometry) {
        const location = selectedPlace.geometry.location;

        const lat = location.lat();
        const lng = location.lng();

        const selectedDatetime = `${e.target.date.value}T${e.target.time.value}:00`;

        const formData = {
          comments: [
            {
              text: e.target.comments.value,
              userId: user.userId,
            },
          ],
          dateTime: selectedDatetime,
          position: { lat, lng },
          userId: user.userId,
          scamTypeId: e.target.fraud_type.value,
          isThereRating: {
            all: 1,
            confirmed: 1,
          },
        };
        console.log("formData", formData);
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/scams`,
          formData
        );
        console.log("Response from the server:", response.data);
        setMarkers([...markers, response.data.newScam]);
      } else {
        console.error("Invalid place object");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-form">
      <section>
        <form method="POST" onSubmit={handleSubmit} className="scam_form">
          <fieldset>
            <legend>
              <strong>Fill out the form below to report a fraud</strong>
            </legend>

            <label htmlFor="fraud_type">
              <strong>Fraud Type:</strong>
            </label>
            <select id="fraud_type" name="fraud_type" className="form-input">
              <option selected>Select one...</option>
              {scamTypes &&
                scamTypes.map((t) => <option value={t._id}>{t.name}</option>)}
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
