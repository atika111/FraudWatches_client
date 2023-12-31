import countryCodes from './countryCodes.json';

export async function getCountryFromCoordinates(lat, lng) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'OK') {
      const results = data.results;
      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const addressComponents = result.address_components;
        for (let j = 0; j < addressComponents.length; j++) {
          const addressComponent = addressComponents[j];
          if (addressComponent.types.includes('country')) {
            return addressComponent.long_name; // Return the country name
          }
        }
      }
    }

    // If no country found, return null or an appropriate default value
    return null;
  } catch (error) {
    console.error('Error fetching data from Google Maps Geocoding API:', error);
    return null;
  }
}

function mapCountryNameToIsoCode(countryName) {
  return countryCodes[countryName] || null;
}

// Example usage:
const lat = 40.7128; // Replace with your latitude
const lng = -74.006; // Replace with your longitude

getCountryFromCoordinates(lat, lng)
  .then((country) => {
    if (country) {
      console.log(`The country at (${lat}, ${lng}) is: ${country}`);
      console.log(mapCountryNameToIsoCode(country));
    } else {
      console.log('Country not found for the given coordinates.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
