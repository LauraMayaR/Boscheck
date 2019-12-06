import React, {useState, useEffect} from 'react';
import{
    GoogleMap, 
    withScriptjs,
    withGoogleMap
} from 'react-google-maps'
const Maps = (props) => {
    const [location,setlocation]=useState({lat:21.878370,lng:-102.295757}); //first value state21.878370, -102.295757
    console.log(location);
    let currentLocations=[location]
    console.log(currentLocations)
    let collectionLocations= currentLocations.push(currentLocations)
    console.log(collectionLocations)
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setlocation({lat:position.coords.latitude, lng:position.coords.longitude})
        
        })
    })
 return(
     <div>
     <GoogleMap 
     defaultZoom={15}
     defaultCenter={{lat:location.lat,lng:location.lng}}//20.675283, -103.392913
     />
     
     </div>
 )
}
export default withScriptjs (
    withGoogleMap(
        Maps
    )
)