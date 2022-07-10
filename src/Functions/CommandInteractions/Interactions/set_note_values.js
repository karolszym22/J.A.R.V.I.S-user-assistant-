import cutTitle from "./Helpers/cut_title"
import cutDescription from "./Helpers/cut_description"

const setNoteValues = (...args) =>
{
 
  const [values, setTitle, setDescription] = args
    
     cutTitle(values, setTitle)
     cutDescription(values, setDescription)
 
}



export default setNoteValues;