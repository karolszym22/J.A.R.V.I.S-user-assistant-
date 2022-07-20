import React, { useEffect, useState } from "react"
import processMessage from "../../../Functions/CommandInteractions/Interactions/Helpers/process_message"
import { searchInformations } from "../../../Commands/search_commands"
import searchReactions from "../../../Reactions/Search/search_reactions"


const FindOnWikipedia = ({speech}) =>
 {
    const IS_ZERO = 0

    const [currentSpeech, setCurrentSpeech] = useState('')
    const [currenValues, setCurrentValue] = useState('')

    useEffect(() =>
    {
        setCurrentSpeech(speech)
        console.log(speech)
             processMessage(currentSpeech, setCurrentValue, searchInformations)
             if(currenValues.length > IS_ZERO && currentSpeech.length === IS_ZERO)
             {
                SearchOnWikipedia()
             }
    })
   
        const SearchOnWikipedia = () => {
            window.responsiveVoice.speak(`${searchReactions[Math.floor(Math.random()*searchReactions.length)]} ${currenValues}`,"Polish Male")
            window.open(`https://pl.wikipedia.org/wiki/${currenValues}`)
            setCurrentValue('')
            
         }


    return(
        <></>
    )
 }
   
 
    
   
   
    
    



export default FindOnWikipedia