import React from 'react'
import Circle from  '../../Organism/Reactor/circle_main'
import GlobalStyle  from '../../../Theme/GlobalStyles';
import CircleContainer from '../../Molecules/Reactor/circle_container'
import Circlethree from '../../Atoms/Reactor/circle3'
import Circlefourth from '../../Atoms/Reactor/circle4'
import Circlefive from '../../Atoms/Reactor/circle5'
import Circlesix from '../../Atoms/Reactor/circle6'
import Circleseven from '../../Atoms/Reactor/circle7'
import Circleeight from '../../Atoms/Reactor/circle8'
import WeatherMain from '../../Organism/Weather/weather_main'
import WeatherContainer from '../../Molecules/Weather_Container/weather_container'
import WeatherCircle from '../../Atoms/Weather/weather_circle'
import WeatherData from '../../Atoms/Weather/weather_data'
import WeatherDay from '../../Atoms/Weather/weather_day'
import WeatherNumber from '../../Atoms/Weather/weather_number'
const Root = () =>
(
    <div>
        <GlobalStyle/>
        <h1>Hello Kdasdsasarol</h1>
        <Circle>
            <CircleContainer>
                 <Circlethree/>
                 <Circlefourth/>
                 <Circlefive/>
                 <Circlesix/>
                 <Circleseven/>
                 <Circleeight/>
            </CircleContainer>
            
        </Circle>
        <WeatherMain>
           <WeatherContainer>
              <WeatherCircle>
                <WeatherData>
                   <WeatherDay>Poniedziałek</WeatherDay>
                   <WeatherNumber>6</WeatherNumber>
                </WeatherData>
                
              </WeatherCircle>
           </WeatherContainer>
        </WeatherMain>
    </div>
)

export default Root;