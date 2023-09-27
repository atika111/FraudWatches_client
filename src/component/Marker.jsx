import { MarkerF } from '@react-google-maps/api';
import React from 'react';

const Marker = ({ position, onClick }) => {
  return <MarkerF position={position} onClick={onClick} />;
};

export default Marker;
