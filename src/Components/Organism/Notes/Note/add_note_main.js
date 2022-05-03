import styled from 'styled-components'
import Buttom  from '../../../Atoms/Notes/Note/add-note_button';
import InputContent from '../../../Atoms/Notes/Note/add-note_input_2';
import InputTittle from '../../../Atoms/Notes/Note/add-note_input';
import AddNoteContainer from '../../../Molecules/Notes/Note/add-note_container'
import { connect } from 'react-redux';
import { addNote as addNoteAction } from '../../../../actions';
import PropTypes from 'prop-types';
import {Formik, Form, Field, ErrorMessage} from 'formik'

const StyledDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    
`;

const AddNotes = ({addNote}) =>
(
    <StyledDiv>
        <AddNoteContainer>
            <Formik initialValues={{title: '', content: ''}} 
            onSubmit={(values) =>{
                console.log(values)
            }}>

                {({isSubmitting}) =>
                (
                  <Form>
                  <InputTittle as={Field} type="text" name="title" placeholder='Tytuł'></InputTittle>  
                  <InputTittle placeholder='Tekst'></InputTittle>  
                  <Buttom type="submit"
                >Dodaj Notke</Buttom>
                </Form>  
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