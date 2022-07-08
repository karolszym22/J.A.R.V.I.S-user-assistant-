import React, {useState} from "react";
import { isNote } from "../IncludeCommends/is_note_commands";


const commands_interactions = (speech) => 
{ 
    let currentInteraction = ''
     currentInteraction = isNote(speech)
       
        return currentInteraction;
}

export default commands_interactions