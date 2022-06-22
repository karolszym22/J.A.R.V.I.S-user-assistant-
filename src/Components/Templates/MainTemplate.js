import React, {useState,useEffect, useContext } from 'react';
import PropTypes from 'prop-types'
import { updateBehavior as updateBehaviorAction } from '../../actions/speech_behavior_actions';
import { ThemeProvider } from "styled-components"
import { connect } from 'react-redux/es/exports';
import GlobalStyle from "../../Theme/GlobalStyles"
import { theme } from "../../Theme/main_theme"
import Main from '../Organism/Menu/main_menu'
import commands_interactions from '../../Functions/CommandInteractions/commands_interactions';
import { SpeechContext } from "../../context/SpeechContext";

const MainTemplate = ({children, updateBehavior}) => {
  
  const [state, setMainState] = React.useState('')
  const speech = useContext(SpeechContext) 

  console.log(speech)
      const setBehavior = () => {
        setMainState(commands_interactions(speech))
        if(state?.length > 0)
        {
          updateBehavior(state)
        }
      }

      useEffect(() =>
      {
        setBehavior()
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


