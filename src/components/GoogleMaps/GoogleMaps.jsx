import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

export default function GoogleMaps({ lat, lng }) {
  function Map() {
    return (
      <GoogleMap 
      defaultZoom={19}
      defaultCenter={{
        lat: lat,
        lng: lng
      }}
      />
    )
  }
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div style={{width: '50vw', height: '50vh', marginLeft: '2vw'}}>
       <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{height: '48vh', marginTop: '2vh'}} />}
        mapElement={<div style={{height: '100%'}} />}
        />
    </div>
  )
}