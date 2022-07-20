import React, {useEffect, useContext, useState} from 'react';
import { SpeechContext } from "../../context/SpeechContext";
import FindOnWikipedia from '../Organism/SearchThingsByVoice.js/findOnWikipedia';

const SearchThingsByVoice = ({speech}) => {
 
    const [currentSpeech, setCurrentSpeech] = useState('')
    useEffect(() =>
    {
        setCurrentSpeech(speech)
    })

    console.log(currentSpeech)
    return(
        <>
         <FindOnWikipedia speech = {currentSpeech}></FindOnWikipedia>
        </>
    )

}

  export default SearchThingsByVoice