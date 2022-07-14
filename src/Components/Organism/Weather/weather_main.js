import styled,{ keyframes } from 'styled-components'
import React, {useEffect} from 'react'
import WeathereLocation from '../../Atoms/Weather/weather_location'
import WeatherElementOne from '../../Atoms/Weather/weather_rectangle_1'
import WeatherElementTwo from '../../Atoms/Weather/weather_rectangle_2'
import WeatherContainer from '../../Molecules/Weather/weather_container'
import WeatherTemp from '../../Atoms/Weather/weather_temp'
import axios from 'axios'

const opacity = keyframes`
  0%{
    opacity: 0;
    display: none;
  }
  50%{
    opacity: 0.5;
    
  }
  100%{
    
    opacity: 1;
    
  }
`;

const StyledDiv = styled.div`
  width: 240px; height: 400px; position: absolute; top: 10%; right: 0.5%; 
  display: flex; flex-direction: column;
  animation: ${opacity} 2s ease-out;
  animation-fill-mode: forwards;
  opacity: 0 ;
  animation-delay: 2s;
`;



const WeatherContainerInformations= () =>
{
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');
  const [responseData, setResponseData] = React.useState({});
  const API_key = '66155567e2e08d7f38875d80ccd3e833'
 
 useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  })
  
  if(latitude && longitude > 0)
   axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_key}`)
    .then(response => {
        setResponseData(response.data)
       
    })
  
  
}, [latitude, longitude])


  return (
    
  <StyledDiv >
    {    responseData.main ? window.responsiveVoice.speak(responseData.name,`temperatura w tym miejscu wynosi${Math.round(responseData.main.temp)}`,"Polish Male") : console.log('Loading...')}
  <WeathereLocation>{responseData.name}</WeathereLocation>
  < WeatherElementOne>
          <WeatherElementTwo>
          <WeatherContainer >
                   <WeatherTemp>Pogoda</WeatherTemp>
                   <WeatherTemp></WeatherTemp>
              </WeatherContainer>
              <WeatherContainer >
                   <WeatherTemp>Temperatura</WeatherTemp>
                   <WeatherTemp>{responseData.main ? (Math.round(responseData.main.temp)) : ('Loading...')}</WeatherTemp>
              </WeatherContainer>
              <WeatherContainer >
                   <WeatherTemp>Wiatr</WeatherTemp>
                   <WeatherTemp>30/h*</WeatherTemp>
              </WeatherContainer>
          </WeatherElementTwo>
  </WeatherElementOne>

</StyledDiv>
  )
}
  
  


export default WeatherContainerInformations

