import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types'
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../../Theme/GlobalStyles"
import { theme } from "../../Theme/main_theme"
import Main from '../Organism/Menu/main_menu'
import { SpeechContext } from '../../context/SpeechContext'; 
import { noteCommands } from '../../Commands/note_commands';


const MainTemplate = ({children}) => {

  const speech = useContext(SpeechContext) 
  useEffect(() =>
  {
    if(noteCommands.includes(speech))
    {
      console.log("zawiera")
    }
  })
  const JarvisTasks = () =>
  {

  }

  return (
    <div>
    <GlobalStyle/>
    <Main></Main>
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </div>
  )
   
}

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired
}

export default MainTemplate;