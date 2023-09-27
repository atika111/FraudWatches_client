const DEFAULT_LOCATION = {
  lat: 51.5,
  lng: 0.118092,
};

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: lng } = pos.coords;
          resolve({ lat, lng });
        },
        () => {
          reject(DEFAULT_LOCATION);
        }
      );
    } else reject(DEFAULT_LOCATION);
  });
};
