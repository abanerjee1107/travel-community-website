import React, { useEffect } from 'react';

const GoogleMapsIntegration = () => {
    useEffect(() => {
        const loadMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8
            });
        };

        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`;
            script.onload = loadMap;
            document.head.appendChild(script);
        } else {
            loadMap();
        }
    }, []);

    return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default GoogleMapsIntegration;
