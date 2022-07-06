import addNoteInformation from "../JarvisRemarks/note_information_remarks";
import removeNoteInformations from "../../Reactions/Note/remove_informations_reaction";

const behaviorSubscribe = (behavior) =>{
    switch (behavior) {
        case 'addNote':
          addNoteInformation()
        break;
        case 'deleteNote':
          removeNoteInformations()
        break
          default: 
          
        
      }
}

export default behaviorSubscribe