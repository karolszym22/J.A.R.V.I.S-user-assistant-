import React, {useEffect, useContext, useState} from 'react';
import { SpeechContext } from "../../context/SpeechContext";
import { connect } from 'react-redux/es/exports';


const VoiceTemplate = ({behavior}) => {

    const speech = useContext(SpeechContext) 
    const [currentSpeech, setCurrentSpeech] = useState('')
    const [currentState, setCurrentState] = useState('')
  
    useEffect(() =>
    {
        setCurrentSpeech(speech)
        console.log("moj behavior", behavior)
        console.log(currentSpeech, currentState)
        if(currentState === 'addNote')
        {
            Speech(currentSpeech)
            console.log(currentState)
        }
        
    })
    const Speech = (speech) =>{
        console.log(speech)
    }
    return (
        <>
        </>
    )
}

const mapStateToProps = state => {
    const {behavior} = state.behavior;
    return {behavior};
  }


  export default connect(null, mapStateToProps)(VoiceTemplate);