import { titleCommands } from "../../../../Commands/note_commands"


const cutTitle = (...args) =>
   {
      const [values, setTitle] = args

     titleCommands.forEach((e) =>{
       const currentCommand = values.substr(0, e.length)
        if(currentCommand === e)
         {
           const currentTitle = values.substr(e.length, values.length)
           setTitle(currentTitle);
         }
     })

  
}

export default cutTitle