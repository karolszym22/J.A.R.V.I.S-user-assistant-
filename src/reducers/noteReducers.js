import noteAddReactions from "../Reactions/Note/note_add_reactions";
import noteRemoveReactions from "../Reactions/Note/note_remove_reactions";


const initialState = {
    notes: [
    {
        id: 1,
        title: "Zakupy",
        content: "Kupic rzeczy na obiad"
    },
    {
        id: 2,
        title: "Posprzatac w domu",
        content: "Umyc meble, odkurzyc caly dom"
    },
    {
        id: 3,
        title: "Kino",
        content: "Wieczorem kino z horrorem",
        
    }
    ]
    
}


const noteReducer = (state = initialState, action) => {
    


    switch(action.type)
    {
        case ('DELETE_NOTE'):
            window.responsiveVoice.speak(noteAddReactions[Math.floor(Math.random()*noteAddReactions.length)],"Polish Male")
            return {
                ...state, 
                    notes: state.notes.filter((item) => item.id !== action.payload.id) 
                };
         case ('ADD_NOTE'):
            window.responsiveVoice.speak(noteAddReactions[Math.floor(Math.random()*noteAddReactions.length)],"Polish Male")
              return {...state, notes: [...state.notes, action.payload.note]}
            
            default: return state
            
    }
    
}

export default noteReducer