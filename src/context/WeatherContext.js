import React, { useState, useEffect, useContext } from "react";
import axios from "axios";



export const WeatcherContext = React.createContext();

const WeatcherProvider = ({ children }) => {
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');
  const [responseData, setResponseData] = React.useState({});
  const API_key = '66155567e2e08d7f38875d80ccd3e833'
 
 
React.useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  })
  
  if(latitude && longitude > 0)
   axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_key}`)
    .then(response => {
        setResponseData(response.data)
       
    })
 
   console.log(responseData.name)
},[latitude, longitude])

    
    

  return (
    <WeatcherContext.Provider value={responseData}>{children}</WeatcherContext.Provider>
  );
};

export default WeatcherProvider