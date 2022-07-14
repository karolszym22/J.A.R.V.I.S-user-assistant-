import React, {useState,useEffect, useContext } from 'react';
import PropTypes from 'prop-types'
import { updateBehavior as updateBehaviorAction } from '../../actions/speech_behavior_actions';
import behaviorSubscribe from '../../Functions/VoiceSubscribe/voice_interactions';
import { ThemeProvider } from "styled-components"
import { connect } from 'react-redux/es/exports';
import DoThingsByVoice from './DoThingsByVoice';
import SearchThingsByVoice from './SearchThingsByVoice';
import GlobalStyle from "../../Theme/GlobalStyles"
import { theme } from "../../Theme/main_theme"
import Main from '../Organism/Menu/main_menu'
import commands_interactions from '../../Functions/CommandInteractions/commands_interactions';
import { SpeechContext } from "../../context/SpeechContext";

const MainTemplate = ({children, updateBehavior}) => {

  const [state, setMainState] = useState('')
  const speech = useContext(SpeechContext) 
  
  const EMPTY_STATE = 0
      
       useEffect(() =>
      {
        if(state?.length > EMPTY_STATE)
          {
            updateBehavior(state)
            behaviorSubscribe(state)
          } 
      }, [state])


      useEffect(() =>
      {
        setBehavior()
        const setDefault = setTimeout(() => {
            updateBehavior('default')
        }, 8000);
           return () => clearTimeout(setDefault);
      })

      const setBehavior = () => {
        setMainState(commands_interactions(speech))
      }
      
 
  return (
    <div>
    <GlobalStyle/>
       <Main></Main>
          <DoThingsByVoice state = {state}></DoThingsByVoice>
          <SearchThingsByVoice speech = {speech}></SearchThingsByVoice>
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


 
 
 export default connect(null, mapDispatchToProps )(MainTemplate);


