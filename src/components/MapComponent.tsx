import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };
  const center = {
    lat: 52.2297,
    lng: 21.0122
  };

  return (
<LoadScript googleMapsApiKey="AIzaSyA7Fcly_KtT32BaDUyEa2fGjgqGxXnoVHc">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >

      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
