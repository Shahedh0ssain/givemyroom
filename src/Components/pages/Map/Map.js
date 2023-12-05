import React from "react";
import SingleHotel from "../../SingleHotel/SingleHotel";



const Map = () => {

    // const [islocation, setisLocation] = useState(false);
    // const [isloading, setisLoading] = useState(false);

    // const apiKey = 'AIzaSyD0JoV7YKa9kV63QHVz7XG2Ij1on6SLjB8';
    // // Make a request to find hotels near a location
    // const location = { lat: 37.7749, lng: -122.4194 }; // Example coordinates for San Francisco
    // const radius = 1000; // Search within a 1 km radius
    // const type = 'lodging'; // Search for lodging (hotels)

    // useEffect(() => {

    //     // Create a new map instance
    //     if (window.google && window.google.maps) {
    //         // Create a new map instance
    //         setisLoading(true);
    //         if (islocation) {
    //             const map = new window.google.maps.Map(document.getElementById('map'), {
    //                 // center: { lat: -34.397, lng: 150.644 },
    //                 center: { lat: islocation.latitude, lng: islocation.longitude },
    //                 zoom: 30,
    //             });

    //             // Optionally, you can add markers, polygons, etc.

    //             const marker = new window.google.maps.Marker({
    //                 // position: { lat: -34.397, lng: 150.644 },
    //                 position: { lat: islocation.latitude, lng: islocation.longitude },
    //                 map: map,
    //                 title: 'Hello World!',
    //             });
    //             marker.setMap(map);
    //             setisLoading(false);
    //         } else {
    //             console.log("islocation error", islocation);
    //             setisLoading(false);
    //         }
    //     } else {
    //         console.error('Google Maps API not loaded.');
    //         setisLoading(false);
    //     }
    // }, [islocation]);


    // useEffect(() => {

    // fetch(`https://ass-backend-12-copy.onrender.com/myservice?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => setOrders(data));

    // fetch('/places')
    //     .then(res => res.json())
    //     .then(data => {
    //         // Process the data, which will contain information about nearby hotels
    //         console.log(data);

    // Example: Log names and addresses of nearby hotels
    // data.results.forEach(hotel => {
    //     console.log(`Name: ${hotel.name}, Address: ${hotel.vicinity}`);
    // });
    // })
    // .catch(error => {
    //     console.error('Error fetching data:', error);
    // });

    // }, []);

    return (
        <div className="container">
            <h1 className="text-center">Map page</h1>
            <div className="d-flex justify-content-center" id="map" >
                <div className='pt-5 '  style={{ width: '500px', height: '400px' }}>
                    <img className='' src="images/map.png" alt="Girl in a jacket" ></img>
                </div>
            </div>

            <div className="row row-cols-3 gx-2 gy-2 py-5">
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