import styled from 'styled-components'
import {Formik, Form, Field} from 'formik'
import SearchInput from '../../Atoms/Search/search_input'

const StyledForm = styled(Form)`

display: flex ;
flex-direction: column;
`

const Search = () =>
(
    <div>
    <div>
        <Formik  initialValues={{content: ''}} 
        onSubmit={(values) =>{
            console.log(values)
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
            </StyledForm>  
            )}
      
      </Formik >
   </div>

</div>
)

export default Search