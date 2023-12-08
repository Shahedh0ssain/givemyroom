import { useState } from "react";



const useMap = (Location) => {

  let temLocation = Location;

  const nolocation = {
    latitude
      :
      23.461888,
    longitude
      :
      91.1638528
  }

  if (!Location) {
    console.log("tem location")
    temLocation = nolocation
  }

  const [myLocation, setmyLocation] = useState(temLocation);



  // console.log("calling usemap", Location);

  // const [loading, setLoading] = useState(false);



  // useEffect(() => {

  //   // Create a new map instance
  //   if (window.google && window.google.maps) {
  //     // Create a new map instance
  //     // setisLoading(true);
  //     if (islocation !== null) {
  //       console.log("useMap", location);
  //       const map = new window.google.maps.Map(document.getElementById('map'), {
  //         // center: { lat: -34.397, lng: 150.644 },
  //         center: { lat: islocation.latitude, lng: islocation.longitude },
  //         zoom: 10,
  //       });

  //       // Optionally, you can add markers, polygons, etc.

  //       const marker = new window.google.maps.Marker({
  //         // position: { lat: -34.397, lng: 150.644 },
  //         position: { lat: islocation.latitude, lng: islocation.longitude },
  //         map: map,
  //         title: 'Hello World!',
  //       });
  //       marker.setMap(map);
  //       // setisLoading(false);
  //     } else {
  //       const map = new window.google.maps.Map(document.getElementById('map'), {
  //         center: { lat: -34.397, lng: 150.644 },
  //         // center: { lat: islocation.latitude, lng: islocation.longitude },
  //         zoom: 10,
  //       });
  //       const marker = new window.google.maps.Marker({
  //         position: { lat: -34.397, lng: 150.644 },
  //         // position: { lat: islocation.latitude, lng: islocation.longitude },
  //         map: map,
  //         title: 'Hello World!',
  //       });
  //       marker.setMap(map);
  //       // console.log("islocation error", islocation);
  //       // setisLoading(false);
  //     }
  //   } else {
  //     console.error('Google Maps API not loaded.');
  //     // setisLoading(false);
  //   }
  // }, [islocation]);

  return {
    myLocation
  }

}

export default useMap;