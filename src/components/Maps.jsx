import React, {useEffect, useState} from 'react';
import {APIProvider, Map, Marker, useMapsLibrary} from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";

const Maps = ({address}) => {
    return (
        <APIProvider apiKey={'AIzaSyA5TfBBVR8f9tZZOLWm4cBXxqtr7NUAl2U'}>
            <MapsWithGeocoding address={address} />
        </APIProvider>

    );
};
Maps.propTypes = {
    address: PropTypes.string
}
const MapsWithGeocoding = ({address} ) => {
    const [location, setLocation] = useState();
    const geocodingLibrary = useMapsLibrary('geocoding');
    useEffect(() => {
        if (!geocodingLibrary) {
            return
        }
        const geocoder = new geocodingLibrary.Geocoder();
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == 'OK') {
                console.log(results[0].geometry.location);
                setLocation(() => results[0].geometry.location);
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    }, [geocodingLibrary]);

    return location ? (
        <div style={{height:"500px"}}>
            <Map
                center={location}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                defaultZoom={10}
            >
                <Marker position={location} />
            </Map>
        </div>
    ) : null;
}
MapsWithGeocoding.propTypes = {
    address: PropTypes.string
}
export default Maps;