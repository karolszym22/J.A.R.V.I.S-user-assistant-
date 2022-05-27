import React, { useEffect } from "react"
import PropTypes from 'prop-types'
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../../Theme/GlobalStyles"
import { theme } from "../../Theme/main_theme"
import Main from '../Organism/Menu/main-menu'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'



const MainTemplate = ({children}) => {

  

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