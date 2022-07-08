
const deleteNoteValidation = (...args) =>
{
  let is_title = false; 
  const EMPTY_VALUE = 0;  

  const [title, setNoteTitle] = args

      title?.length >EMPTY_VALUE ? is_title = true : is_title = false
        is_title  ===true ? setNoteTitle(true) : setNoteTitle(false)
        
}

export default deleteNoteValidation