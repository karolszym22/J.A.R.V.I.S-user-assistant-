import styled from 'styled-components'
import Buttom  from '../../../Atoms/Notes/Note/add-note_button';
import InputContent from '../../../Atoms/Notes/Note/add-note_input_2';
import InputTittle from '../../../Atoms/Notes/Note/add-note_input';
import AddNoteContainer from '../../../Molecules/Notes/Note/add-note_container'
import { connect } from 'react-redux';
import { addNote as addNoteAction } from '../../../../actions';
import {Formik, Form, Field} from 'formik'

const StyledDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    
`;
const StyledContainer = styled(Form)`

display: flex ;
flex-direction: column;
 

`

const AddNotes = ({addNote}) =>
(
    <StyledDiv>
        <AddNoteContainer>
            <Formik initialValues={{title: '', content: ''}} 
            onSubmit={(values) =>{
                addNote(values)
            }}>

                {({isSubmitting, values, handleChange, handleBlur}) =>
                (
                  <StyledContainer>
                  <InputTittle
                   as={Field}
                   type="text"
                   name="title"
                   placeholder='Tytuł'
                   onChange = {handleChange}
                   onBlur = {{handleBlur}}
                   value = {values.title}
                   >
                   
                   </InputTittle>  
                  <InputContent
                    as={Field}
                    type="text"
                    name="content"
                    placeholder='Tekst'
                    onChange = {handleChange}
                    onBlur = {{handleBlur}}
                    value = {values.content}
                  ></InputContent>  
                  <Buttom type="submit"
                >Dodaj Notke</Buttom>
                </StyledContainer>  
                )}
          
          </Formik>
       </AddNoteContainer>

    </StyledDiv>
    
)

AddNotes.propTypes = {
    
      
}

const mapDispatchToProps = dispatch => ({
    addNote: (noteContent) => dispatch(addNoteAction(noteContent))
})

export default connect(null, mapDispatchToProps)(AddNotes);