import React, {useEffect, useState} from 'react';
import {APIProvider, Map, Marker, useMapsLibrary} from "@vis.gl/react-google-maps";

const Maps = () => {
    return (
        <APIProvider apiKey={'AIzaSyA5TfBBVR8f9tZZOLWm4cBXxqtr7NUAl2U'}>
            <MapsWithGeocoding />
        </APIProvider>

    );
};

const MapsWithGeocoding = ( ) => {
    const [location, setLocation] = useState();
    const geocodingLibrary = useMapsLibrary('geocoding');
    useEffect(() => {
        if (!geocodingLibrary) {
            return
        }
        const geocoder = new geocodingLibrary.Geocoder();
        geocoder.geocode( { 'address': 'Maria Bangata 2B'}, function(results, status) {
            if (status == 'OK') {
                console.log(results[0].geometry.location);
                setLocation(() => results[0].geometry.location);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }, [geocodingLibrary]);

    return (
        <>
            <Map
                center={location}
                zoom={10}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                <Marker position={location} />
            </Map>
        </>
    )
}

export default Maps;