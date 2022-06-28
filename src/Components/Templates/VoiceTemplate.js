import React, {useEffect,useState} from 'react';
import noteAddReactions from '../../Reactions/Note/note_add_reactions';
const VoiceTemplate = ({state}) => {

    const currentState = state

    useEffect(() =>
    {
        switch (currentState) {
            case 'addNote':
                noteAddReactions()
              break;
            default: 
              
            
          }
    })

    return (
        <>
        </>
    )
}

export default VoiceTemplate