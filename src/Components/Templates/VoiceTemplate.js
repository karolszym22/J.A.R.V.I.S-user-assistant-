import React, {useEffect, useContext, useState} from 'react';
import { SpeechContext } from "../../context/SpeechContext";
import { connect } from 'react-redux/es/exports';
import addNoteInterction from '../../Functions/CommandInteractions/Interactions/add_note_interaction';

const VoiceTemplate = ({behavior}) => {

    const speech = useContext(SpeechContext) 
    const [currentSpeech, setCurrentSpeech] = useState('')
    const [currentState, setCurrentState] = useState('')
  
    useEffect(() =>
    {
        setCurrentSpeech(speech)
        setCurrentState(behavior)
        
        switch(currentState) {
            case 'addNote':
                addNoteInterction(currentSpeech)
              break;
            case 'deleteNote':
              // code block
              break;
            default:
              // code block
          }
       })

    return (
        <>
        </>
    )
}

const mapStateToProps = state => {
    const {behavior} = state.behavior;
    return {behavior};
  }


  export default connect(mapStateToProps)(VoiceTemplate);