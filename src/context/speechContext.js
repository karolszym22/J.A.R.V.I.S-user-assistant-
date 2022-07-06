import React, { useState, useEffect, useContext } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const SpeechContext = React.createContext();

const SpeechProvider = ({ children }) => {
    const [speech, setSpeech] = React.useState('');    
      const { transcript } = useSpeechRecognition();
      useEffect(()=>{
        SpeechRecognition.startListening({continuous:false})
        setSpeech(transcript);
      })

       return (
    <SpeechContext.Provider value={speech}>{children}</SpeechContext.Provider>
  );
};

export default SpeechProvider