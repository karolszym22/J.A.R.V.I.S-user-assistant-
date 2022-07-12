import { addTitleCommands, deleteNoteCommands } from "../../../../Commands/note_commands"


const cutTitle = (...args) =>
   {
      const [values, setTitle] = args

        addTitleCommands.forEach((e) =>{
          breakValues(e, setTitle, values)
        })

        deleteNoteCommands.forEach((e) =>{
              breakValues(e, setTitle, values)
       })

  
}

const breakValues = (element, setTitle, values) =>
{
  const currentCommand = values.substr(0, element.length)

  if(currentCommand === element)
   {
      const currentTitle = values.substr(element.length, values.length)
      setTitle(currentTitle);
   }
}
export default cutTitle