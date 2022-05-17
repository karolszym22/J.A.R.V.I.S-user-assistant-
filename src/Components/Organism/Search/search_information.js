import styled from 'styled-components'
import {Formik, Form, Field} from 'formik'
import SearchInput from '../../Atoms/Search/search_input'
import Button from '../../Atoms/Notes/Note/add-note_button'
const StyledForm = styled(Form)`


width: 100% ;
`

const Search = () =>
(
    
        <Formik  initialValues={{content: ''}} 
        onSubmit={(values) =>{
          window.open(`https://pl.wikipedia.org/wiki/${values.content}`, "_blank")
        }}>

            {({isSubmitting, values, handleChange, handleBlur}) =>
            (
              <StyledForm>
              <SearchInput
                as={Field}
                type="text"
                name="content"
                placeholder='Wyszukaj w Wikipedii'
                onChange = {handleChange}
                onBlur = {{handleBlur}}
                value = {values.content}
              ></SearchInput>  
              <Button type="submit">Szukaj</Button>
            </StyledForm>  
            )}
      
      </Formik >
   
)

export default Search