import React, {useState} from "react";
import addNoteInteractions from "./Interactions/addNoteInteractions"

const commands_interactions = (speech) => 
{ 
    return addNoteInteractions(speech); 
}

export default commands_interactions