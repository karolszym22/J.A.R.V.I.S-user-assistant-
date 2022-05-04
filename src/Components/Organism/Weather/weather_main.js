import styled from 'styled-components'

import WeathereLocation from '../../Atoms/Weather/weather_location'
import WeatherElementOne from '../../Atoms/Weather/weather_rectangle_1'
import WeatherElementTwo from '../../Atoms/Weather/weather_rectangle_2'
import WeatherContainer from '../../Molecules/Weather/weather_container'
import WeatherWind from '../../Atoms/Weather/weather_wind'
import WeatherTemp from '../../Atoms/Weather/weather_temp'
import WeatherState from '../../Atoms/Weather/weather_state'
import WeatherStateP from '../../Atoms/Weather/weather_state_p'

const StyledDiv = styled.div`
  width: 240px; height: 400px; position: absolute; top: 10%; right: 7.5%; 
  display: flex; flex-direction: column;
`;

const WeatherContainerInformations= () =>
(
  
  <StyledDiv>
    <WeathereLocation>Turka</WeathereLocation>
    < WeatherElementOne>
            <WeatherElementTwo >
            <WeatherContainer >
                     <WeatherTemp>Pogoda</WeatherTemp>
                     <WeatherTemp>Slonecznie</WeatherTemp>
                </WeatherContainer>
                <WeatherContainer >
                     <WeatherTemp>Temperatura</WeatherTemp>
                     <WeatherTemp>20*</WeatherTemp>
                </WeatherContainer>
                <WeatherContainer >
                     <WeatherTemp>Wiatr</WeatherTemp>
                     <WeatherTemp>30/h*</WeatherTemp>
                </WeatherContainer>
            </WeatherElementTwo>
    </WeatherElementOne>

  </StyledDiv>
  
)

export default WeatherContainerInformations

