import { includeNote } from "../../IncludeCommends/include_note_commands";
import { updateBehavior } from "../../../actions/speech_behavior_actions";
import noteInformation from "../../JarvisRemarks/note_information_remarks";


const addNoteInteractions = (command) =>{
    if(includeNote(command))
         {
            updateBehavior(command)
            noteInformation();
         }
}

export default addNoteInteractions