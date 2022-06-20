import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { updateBehavior as updateBehaviorAction } from '../../actions/speech_behavior_actions';
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../../Theme/GlobalStyles"
import { theme } from "../../Theme/main_theme"
import Main from '../Organism/Menu/main_menu'
import { SpeechContext } from '../../context/SpeechContext'; 
import { includeNote } from '../../Functions/IncludeCommends/include_note_commands';
import noteInformation from '../../Functions/JarvisRemarks/note_information_remarks';

const MainTemplate = ({children, updateBehavior}) => {

  const speech = useContext(SpeechContext) 

      useEffect(() =>
      {
         if(includeNote(speech))
         {
            updateBehavior(speech)
            noteInformation();
         }
       })
 
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


const mapDispatchToProps = dispatch => ({
 updateBehavior: (content) => dispatch(updateBehaviorAction(content))
  
})


export default connect(null, mapDispatchToProps)(MainTemplate);