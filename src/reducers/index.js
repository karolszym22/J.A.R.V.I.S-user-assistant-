const initialState = {
    notes: [
    {
        id: 1,
        title: "aaaaaaaaaaaaaaaaaaa",
        content: "xxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        id: 2,
        title: "aaaaaaaaaaaaaaaaaaaa",
        content: "xxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
        id: 3,
        title: "aaaaaaaaaaaaaaaaaaaa",
        content: "xxxxxxxxxxxxxxxxxxxxxxxxx",
        
    }
    ]
    
}


const rootReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ('DELETE_NOTE'):
            return {
                ...state, 
                    notes: state.notes.filter((item) => item.id !== action.payload.id) 
                };
         case ('ADD_NOTE'):
             console.log(state.notes);
              return {...state, notes: [...state.notes, action.payload.note]}
            
            default: return state
            
    }
    
}

export default rootReducer