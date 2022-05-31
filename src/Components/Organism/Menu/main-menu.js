import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components'
import MenuContainer from '../../Molecules/Menu/menu_container';
import MenuNav from '../../Atoms/Menu/menu_nav'
import {NavLink, useNavigate} from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import navComands from '../../../Commands/nav_comands';
import { SpeechContext } from '../../../context/speechContext'; 
const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Menu = () =>
{
  const navigate = useNavigate();
  const [speech, setSpeech] = React.useState('');    
      const { transcript } = useSpeechRecognition();
      useEffect(()=>{
        SpeechRecognition.startListening({continuous:false})
        navComands.forEach((e) => {
         if(e.comands.includes(transcript.toLowerCase()))
             navigate(e.link)

        })
        console.log(transcript.toLowerCase())
      })

       
  
  
    return(
     <StyledDiv>
       <MenuContainer>
           
          <MenuNav as={NavLink} to="/">Interfejs</MenuNav>
          <MenuNav as={NavLink} to="/szukaj">Wikipedia</MenuNav>
          <MenuNav as={NavLink} to="/notes">Notatki</MenuNav>
          <MenuNav as={NavLink} to="/help">Pomoc</MenuNav>
          
      </MenuContainer>
    </StyledDiv>)


}
    



export default Menu