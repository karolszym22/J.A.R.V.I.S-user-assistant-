import { createStore } from "redux";
import notesApp from '../reducers/noteReducers'

const store = createStore(notesApp);

export default store;