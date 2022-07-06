
const addNoteValidation = (...args) =>
{
  let is_title = false;
  let is_description = false  
  const EMPTY_VALUE = 0;  

  const {title,description, setNoteValues} = args

      title?.length >EMPTY_VALUE ? is_title = true : is_title = false
      description?.length >EMPTY_VALUE ? is_description = true : is_description = false
        is_title && is_description ===true ? setNoteValues(true) : setNoteValues(false)
}

export default addNoteValidation()