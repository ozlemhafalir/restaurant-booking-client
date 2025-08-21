import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';

const AnalyticsProvider = () => {
    useEffect(() => {
        ReactGA.initialize('G-MPLL7L6SLV');
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, []);

    return null;
};


export default AnalyticsProvider;