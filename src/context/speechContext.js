import React, { useState, useEffect, useContext, createContext } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const SpeechContext = createContext();

const SpeechProvider = ({ children }) => {
    const [speech, setSpeech] = useState('');    
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