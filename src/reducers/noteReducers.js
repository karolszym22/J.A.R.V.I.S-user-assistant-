import noteAddInformation from "../Functions/JarvisRemarks/note_add_remarks";
import noteRemoveInformation from "../Functions/JarvisRemarks/note_remove_remarks";

const initialState = {
    notes: [
    
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
        case ('DELETE_NOTE_BY_VOICE'):
            noteRemoveInformation()
                    return {
                 ...state, 
                     notes: state.notes.filter((item) => item.id !== action.payload.title) 
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