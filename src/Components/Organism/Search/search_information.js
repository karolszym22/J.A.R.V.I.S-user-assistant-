import React  from 'react';
import styled from 'styled-components'
import {Formik, Form, Field} from 'formik'
import SearchInput from '../../Atoms/Search/search_input'
import Button from '../../Atoms/Notes/Note/add-note_button'
import searchReactions from '../../../Reactions/Search/search_reactions';
const StyledForm = styled(Form)`


width: 100% ;
height: 45px ;
background-color: transparent ;
border: 5px solid rgb(0, 205, 209) ;
border-radius: 20px ;
position: relative;
`

const Search = () =>
(
  <>
<Formik  initialValues={{content: ''}} 
        onSubmit={(values) =>{
          window.responsiveVoice.speak(`${searchReactions[Math.floor(Math.random()*searchReactions.length)]} ${values.content}`,"Polish Male")
          window.open(`https://pl.wikipedia.org/wiki/${values.content}`, "_blank")}}>
          {({values, handleChange, handleBlur}) =>
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
    </>
)

export default Search