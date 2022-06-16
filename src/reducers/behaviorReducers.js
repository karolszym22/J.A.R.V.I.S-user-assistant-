import noteAddReactions from "../Reactions/Note/note_add_reactions";
import noteRemoveReactions from "../Reactions/Note/note_remove_reactions";


const initialState = {
   behavior: 'default'
    
}


const behaviorReducer = (state = initialState, action) => {
    


    switch(action.type)
    {
       case('BEHAVIOR_UPDATE'): 
            
    }
    
}

export default behaviorReducer