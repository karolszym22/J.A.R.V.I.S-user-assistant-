import { combineReducers } from 'redux'
import behaviorReducer from './behaviorReducers'
import noteReducer from './noteReducers'

const reducers = combineReducers({
    behavior:behaviorReducer,
    note:noteReducer
  })

  
  export default reducers