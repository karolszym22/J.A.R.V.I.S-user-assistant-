import noteAddInformation from "../Functions/JarvisRemarks/note_add_remarks";
import noteRemoveInformation from "../Functions/JarvisRemarks/note_remove_remarks";

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
            noteRemoveInformation()
            return {
                ...state, 
                    notes: state.notes.filter((item) => item.id !== action.payload.id) 
                };
         case ('ADD_NOTE'):
            noteAddInformation()
              return {...state, notes: [...state.notes, action.payload.note]};
         case ('ADD_NOTE_BY_VOICE'):
            
            noteAddInformation()
                  return {...state, notes: [...state.notes, action.payload.note]};
            
            default: return state
            
    }
    
}

export default noteReducer