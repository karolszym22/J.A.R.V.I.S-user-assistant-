import styled from 'styled-components'
import Buttom  from '../../../Atoms/Notes/Note/add-note_button';
import InputContent from '../../../Atoms/Notes/Note/add-note_input_2';
import InputTittle from '../../../Atoms/Notes/Note/add-note_input';
import AddNoteContainer from '../../../Molecules/Notes/Note/add-note_container'
import { connect } from 'react-redux';
import { addNote as addNoteAction } from '../../../../actions';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    
`;

const AddNotes = ({addNote, content}) =>
(
    <StyledDiv>
        <AddNoteContainer>
          <InputTittle placeholder='Tytuł'></InputTittle>  
          <InputContent placeholder='Tekst'></InputContent>
          <Buttom onClick={()=> addNote({
              title: "elo",
              content: "hahahaa",
          })}>Dodaj Notke</Buttom>
       </AddNoteContainer>

    </StyledDiv>
    
)

AddNotes.propTypes = {
    
      
}

const mapDispatchToProps = dispatch => ({
    addNote: (noteContent) => dispatch(addNoteAction(noteContent))
})

export default connect(null, mapDispatchToProps)(AddNotes);