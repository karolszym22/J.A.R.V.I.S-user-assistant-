
const add_note_validation = (...args) =>
{
  let is_title = false;
  let is_description = false  
  const VALUE_lENGTH = 0;  

  const {title,description, setNoteValues} = args

      title?.length > VALUE_lENGTH ? is_title = true : is_title = false
      description?.length > VALUE_lENGTH ? is_description = true : is_description = false
        is_title === true && is_description ===true ? setNoteValues(true) : setNoteValues(false)
}

export default add_note_validation()