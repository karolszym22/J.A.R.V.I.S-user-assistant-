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
import WeatherMain from '../../Organism/Data/data_main'
import WeatherContainer from '../../Molecules/Data_Container/data_container'
import WeatherCircle from '../../Atoms/Date/data_circle'
import WeatherData from '../../Atoms/Date/data_data'
import WeatherDay from '../../Atoms/Date/data_day'
import WeatherNumber from '../../Atoms/Date/data_number'
import MainMenu from '../../Organism/Menu/main-menu'
import MenuContainer  from '../../Molecules/Menu/menu_container'
import MenuNav from '../../Atoms/Menu/menu_nav'
import MainTime from '../../Organism/Time/time-main'
import TimeContainer  from '../../Molecules/Time/time_container'
import TimeData from '../../Atoms/Time/time_data'
import TimeCircle from '../../Atoms/Time/time_circle'

import MainNotes from '../../Organism/Notes/notes_main'
import NotesTitle from '../../Atoms/Notes/notes_title'
import NotesData from '../../Atoms/Notes/notes_data'
import NotesRectangleOne from '../../Atoms/Notes/notes_rectangle_1'
import NotesRectangleTwo from '../../Atoms/Notes/notes_rectangle_2'
import NotesRectangleThree from '../../Molecules/Notes/notes_container'
const Root = () =>
(
    <div>
        <GlobalStyle/>
         <MainMenu>
            <MenuContainer>
               <MenuNav>Głowna</MenuNav>
               <MenuNav>Szukaj</MenuNav>
               <MenuNav>Pogoda</MenuNav>
               <MenuNav>Notatki</MenuNav>
               <MenuNav>Pomoc</MenuNav>
            </MenuContainer>
         </MainMenu>
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
        <MainTime >
           <TimeContainer>
              <TimeCircle>
              <TimeData>
                 23
              </TimeData>
      
              </TimeCircle>
              
           </TimeContainer>
        </MainTime>
        <MainNotes>
           <NotesTitle>Notes</NotesTitle>
           <NotesRectangleOne></NotesRectangleOne>
           <NotesRectangleTwo></NotesRectangleTwo>
           <NotesRectangleThree>
              <NotesData>Karol</NotesData>
              <NotesData>Karol</NotesData>
              <NotesData>Karol</NotesData>
              <NotesData>Karol</NotesData>
           </NotesRectangleThree>
        </MainNotes>
    </div>
)

export default Root;