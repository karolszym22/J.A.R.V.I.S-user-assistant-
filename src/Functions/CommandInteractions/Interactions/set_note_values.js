
import { titleCommands, contentCommands } from "../../../Commands/note_commands";

let title = '' 
let description = ''

const setNoteValues = (...args) =>
{
 
  const [values, setTitle, setDescription] = args

 
  titleCommands.forEach((e) =>
  {
      const currentCommand = values.substr(0, e.length)
      if(currentCommand === e)
      {
        const currentTitle = values.substr(e.length, values.length)
        setTitle(currentTitle);
      }
  })


  contentCommands.forEach((e) =>{
    const currentCommand = values.substr(0, e.length)
     if(currentCommand === e)
     {
       const currentTitle = values.substr(e.length, values.length)
       setDescription(currentTitle)
     }
  })



}


export default setNoteValues;