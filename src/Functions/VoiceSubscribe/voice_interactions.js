import noteInformation from "../JarvisRemarks/note_information_remarks";

const behaviorSubscribe = (behavior) =>{
    switch (behavior) {
        case 'addNote':
          noteInformation()
        break;
        case 'deleteNote':
          window.responsiveVoice.speak(("Podaj tytuł notatki którą chcesz usunąc"),"Polish Male")
        break
          default: 
          
        
      }
}

export default behaviorSubscribe