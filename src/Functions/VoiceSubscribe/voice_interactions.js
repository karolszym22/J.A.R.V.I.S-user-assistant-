const behaviorSubscribe = (behavior) =>{
    switch (behavior) {
        case 'addNote':
          window.responsiveVoice.speak(("Podaj tytuł oraz opis"),"Polish Male")
        break;
        case 'deleteNote':
          window.responsiveVoice.speak(("Podaj tytuł notatki którą chcesz usunąc"),"Polish Male")
        break
          default: 
          
        
      }
}

export default behaviorSubscribe