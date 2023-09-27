import React from "react";
import { Autocomplete } from "@react-google-maps/api";

const AutocompleteInput = ({ onSelectPlace }) => {
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
      <input type="text" placeholder="Enter a location" />
    </Autocomplete>
  );
};

export default AutocompleteInput;
