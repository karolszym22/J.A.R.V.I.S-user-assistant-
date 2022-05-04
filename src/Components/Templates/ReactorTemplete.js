import React from 'react'
import styled from 'styled-components';
import NotesMenu from '../Organism/Notes/NotesMain/notes_main'
import WeatherMenu from '../Organism/Weather/weather_main'
const StyledDiv = styled.div`
  width: 100%;  display: flex; flex-direction: column; 
  align-items: center; color: rgb(80, 208, 228);`;



const ReactorTemplete = ({children}) =>
(
    <StyledDiv>
        <WeatherMenu ></WeatherMenu>
        <NotesMenu></NotesMenu>
    </StyledDiv>
  
    
)

export default ReactorTemplete;