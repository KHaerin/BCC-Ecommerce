import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.js';
import './map.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios'; 
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


mapboxgl.accessToken = 'pk.eyJ1IjoiaHVyYmtvbCIsImEiOiJjbHVlc24yb2owMndqMm5xdXk4eGE3YmhuIn0.Yr-o2EfRyg75G9NmpD0aYw';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const geocoder = useRef(null); // Reference to the geocoder control
  const [lng, setLng] = useState(null); 
  const [lat, setLat] = useState(null); 
  const [zoom, setZoom] = useState(6);
  const [currentLng, setCurrentLng] = useState(null);
  const [currentLat, setCurrentLat] = useState(null);
  const [currentPlace, setCurrentPlace] = useState('');

  useEffect(() => {
    if (!map.current) {
      // Check if Geolocation is supported by the browser
      if ("geolocation" in navigator) {
        // Request the current position from the Geolocation API
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setLng(longitude);
            setLat(latitude);
            setCurrentLng(longitude.toFixed(4));
            setCurrentLat(latitude.toFixed(4));
  
            map.current = new mapboxgl.Map({
              container: mapContainer.current,
              style: 'mapbox://styles/mapbox/streets-v12',
              center: [longitude, latitude],
              zoom: zoom
            });
  
            // Add the geocoder control
            geocoder.current = new MapboxGeocoder({
              accessToken: mapboxgl.accessToken,
              mapboxgl: mapboxgl,
              marker: false // Disable default marker
            });
  
            // Add geocoder control to the map
            map.current.addControl(geocoder.current);
  
            // Add the geolocate control
            map.current.addControl(
              new mapboxgl.GeolocateControl({
                positionOptions: {
                  enableHighAccuracy: true
                },
                trackUserLocation: true
              })
            );
  
            // Add a marker to the map
            const marker = new mapboxgl.Marker()
              .setLngLat([longitude, latitude])
              .addTo(map.current);
  
            // Listen to the map's click event to set marker, get reverse geocode, and current place
            map.current.on('click', async (e) => {
              const { lng, lat } = e.lngLat;
              setLng(lng.toFixed(4));
              setLat(lat.toFixed(4));
              localStorage.setItem('map_lat', lat);
              localStorage.setItem('map_long', lng);
            
              // Set the marker
              marker.setLngLat([lng, lat]).addTo(map.current);
            
              // Fetch reverse geocode information using Axios
              try {
                const response = await axios.get(`http://localhost/hurb/mapApi.php?longitude=${lng}&latitude=${lat}`);
                const data = response.data;
                console.log(data); // Handle the response data as needed
                setCurrentPlace(data.name); // Update current place state
              } catch (error) {
                console.error('Error fetching reverse geocode:', error);
              }
            });
  
            // Listen to the map's move event to update the latitude and longitude
            map.current.on('move', () => {
              setCurrentLng(map.current.getCenter().lng.toFixed(4));
              setCurrentLat(map.current.getCenter().lat.toFixed(4));
            });
          },
          (error) => {
            console.error("Error getting user's location:", error);
            // If there's an error, fallback to default coordinates (Manila)
            setLng(120.9842);
            setLat(14.5995);
            setCurrentLng(120.9842.toFixed(4));
            setCurrentLat(14.5995.toFixed(4));
          }
        );
      } else {
        // If Geolocation is not supported, fallback to default coordinates (Manila)
        console.error("Geolocation is not supported by your browser.");
        setLng(120.9842);
        setLat(14.5995);
        setCurrentLng(120.9842.toFixed(4));
        setCurrentLat(14.5995.toFixed(4));
      }
    }
  }, []);
  
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <div className="coordinates">
        Longitude: {currentLng}, Latitude: {currentLat}
      </div>
    </div>
  );
}
