import { addContentCommands } from "../../../../Commands/note_commands"


const cutDescription = (...args) =>
  {
     const [values, setDescription] = args

    addContentCommands.forEach((e) =>{
       const currentCommand = values.substr(0, e.length)
         if(currentCommand === e)
           {
              const currentTitle = values.substr(e.length, values.length)
              setDescription(currentTitle)
           }
 })

}

export default cutDescription