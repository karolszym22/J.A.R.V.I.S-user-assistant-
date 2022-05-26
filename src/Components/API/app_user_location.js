import React , { useEffect }  from "react";
import axios from 'axios'



const values = 0;

const GetMyLocation = () =>
{
    const [latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('')
    const [responseData, setResponseData] = React.useState('')
    const API_key = '66155567e2e08d7f38875d80ccd3e833'
    const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_key}`
   
   
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      fetch(API_endpoint)
      axios.get(API_endpoint)
     .then(response => {
        setResponseData(response.data)
    })
    })
  }, [longitude, latitude])

  return responseData
 
}

export default GetMyLocation;

