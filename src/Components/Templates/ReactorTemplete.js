import React from 'react'
import styled from 'styled-components';
import NotesMenu from '../Organism/Notes/NotesMain/notes_main'
import WeatherMenu from '../Organism/Weather/weather_main'
import TimeMenu from '../Organism/Time/time-main'
import ReactorMenu from '../../Components/Organism/Reactor/circle_main';
import DataMenu  from '../../Components/Organism/Data/data_main'
const StyledDiv = styled.div`
  width: 100%;  display: flex; flex-direction: column; 
  align-items: center; color: rgb(80, 208, 228);`;



const ReactorTemplete = () =>
(
    <StyledDiv>
        <ReactorMenu></ReactorMenu>
        <DataMenu></DataMenu>
        <TimeMenu></TimeMenu>
        <WeatherMenu ></WeatherMenu>
        <NotesMenu></NotesMenu>
     </StyledDiv>
  
    
)

export default ReactorTemplete;