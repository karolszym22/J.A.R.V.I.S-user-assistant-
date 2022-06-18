


const initialState = {
   behavior: 'default'
    
}


const behaviorReducer = (state = initialState, action) => {
    
    switch(action.type)
    {
       case('BEHAVIOR_UPDATE'):
          return{
            ...state, behavior: action.payload.behavior
          }
          default: return state
    }
    
}

export default behaviorReducer