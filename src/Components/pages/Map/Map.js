import React, { useEffect, useState } from "react";
import SingleHotel from "../../SingleHotel/SingleHotel";
import useMap from "../../Hooks/useMap";



const Map = () => {

    const [hotels, setHotels] = useState([]);

    const { myLocation } = useMap();
    // console.log("Map to use map", myLocation);


    useEffect(() => {

        // Create a new map instance
        if (window.google && window.google.maps) {
            // Create a new map instance
            // setisLoading(true);
            if (myLocation) {
                console.log("under map ", myLocation)
                const map = new window.google.maps.Map(document.getElementById('map'), {
                    // center: { lat: -34.397, lng: 150.644 },
                    center: { lat: myLocation.latitude, lng: myLocation.longitude },
                    zoom: 10,
                });

                // Optionally, you can add markers, polygons, etc.

                const marker = new window.google.maps.Marker({
                    // position: { lat: -34.397, lng: 150.644 },
                    position: { lat: myLocation.latitude, lng: myLocation.longitude },
                    map: map,
                    title: 'Hello World!',
                });
                marker.setMap(map);
                // setisLoading(false);
            } else {
                console.log("islocation error", myLocation);
                // setisLoading(false);
            }
        } else {
            console.error('Google Maps API not loaded.');
            // setisLoading(false);
        }
    }, [myLocation]);

    // fatch all hotel data


    useEffect(() => {
        const fetchData = async () => {
            try {
                // const location = 'LATITUDE,LONGITUDE';
                // const radius = 1000;
                // const type = 'lodging';
                // const api_key = 'YOUR_API_KEY';

                // Update the API URL to point to your server or use the Google Maps API directly
                // const apiUrl = `http://localhost:4000/api/hotels?location=${location}&radius=${radius}&type=${type}&key=${api_key}`;
                const apiUrl = `http://localhost:5000/hotels`;

                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.results) {
                    setHotels(data.results);
                    console.log('data', data.results);
                } else {
                    console.error(`Error: ${data.error_message || 'Unknown error'}`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);





    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-center border-0 py-2">Map page</h1>

                <div id="map" className="rounded" style={{ width: '60%', height: '350px' }} >
                    <div className=''>
                        {/* //map rander */}
                    </div>

                </div>
            </div>


            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 py-5">
                <SingleHotel></SingleHotel>
                <SingleHotel></SingleHotel>
                <SingleHotel></SingleHotel>
                <SingleHotel></SingleHotel>
                <SingleHotel></SingleHotel>
                <SingleHotel></SingleHotel>
            </div>

            {/* <mapPlace></mapPlace> */}
        </div>
    );
};

export default Map;