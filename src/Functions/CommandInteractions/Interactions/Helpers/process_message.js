const processMessage = (...args) =>
  {
     const [values, setCurrentState, commands] = args
     breakText(values, setCurrentState, commands)
  
 }

const breakText = (values, setCurrentState, commands) =>
{
   commands.forEach((e) =>{
      const currentCommand = values.substr(0, e.length)
        if(currentCommand === e)
          {
             const currentTitle = values.substr(e.length, values.length)
             setCurrentState(currentTitle)
          }
         })
}

export default processMessage