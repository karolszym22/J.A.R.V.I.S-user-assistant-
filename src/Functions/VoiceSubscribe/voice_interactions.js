import addNoteInformation from "../JarvisRemarks/note_information_remarks";
import noteRemoveRemark from "../JarvisRemarks/note_remove_remarks"

const behaviorSubscribe = (behavior) =>{
    switch (behavior) {
        case 'addNote':
          addNoteInformation()
        break;
        case 'deleteNote':
          noteRemoveRemark()
        break
          default: 
          
        
      }
}

export default behaviorSubscribe