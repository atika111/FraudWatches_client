import React, { useEffect, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";

const AutocompleteInput = ({ onSelectPlace, initialCoords }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (initialCoords) {
      // If initialCoords is available, fetch the place details using the Geocoding API
      const geocoder = new window.google.maps.Geocoder();
      const latlng = new window.google.maps.LatLng(
        initialCoords.lat,
        initialCoords.lng
      );

      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK" && results[0]) {
          const place = results[0]; // Get the place object from the geocoding result

          // Set the formatted address as the initial value of the input field
          inputRef.current.value = place.formatted_address;

          // Update the selectedPlace in the parent component (ContactForm)
          onSelectPlace(place);
        }
      });
    }
  }, [initialCoords, onSelectPlace]);

  const handlePlaceSelect = (place) => {
    onSelectPlace(place);
  };

  return (
    <Autocomplete
      onLoad={(autocomplete) => {
        autocomplete.addListener("place_changed", () => {
          const selectedPlace = autocomplete.getPlace();
          handlePlaceSelect(selectedPlace);
        });
      }}
    >
      <input ref={inputRef} type="text" placeholder="Enter a location" />
    </Autocomplete>
  );
};

export default AutocompleteInput;
