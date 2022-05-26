import styled from 'styled-components'
import React from 'react'
import NoteTitle from '../../../Atoms/Notes/Note/note_title'
import NoteContent from '../../../Atoms/Notes/Note/note_content'
import NoteContentContainer from '../../../Molecules/Notes/Note/note_container'
import PropTypes from 'prop-types';
import DeleteNote from '../../../Atoms/Notes/Assets/delete_note'
import { connect} from 'react-redux';
import { deleteNote as deleteNoteAction } from '../../../../actions'
import { Component } from 'react';

const StyledDiv_3 = styled.div`
  width: 300px; height: 400px; border: 4px solid rgb(80, 208, 228); 
  display: flex; flex-direction: column; 
  align-items: center; margin: 10px;
  position: relative ;
`
class Note extends Component
{
state = {
  redirect: false,
}

render() {
  const {title, content, id, deleteNote} = this.props;
    return (
      <StyledDiv_3>
      <DeleteNote onClick={()=> deleteNote(id)}>delete</DeleteNote>
        <NoteTitle>{title}</NoteTitle>
            <NoteContentContainer>
                <NoteContent>{content}</NoteContent>
            </NoteContentContainer>
            
        
  </StyledDiv_3>
    )
}
}

Note.protoTypes = {
   title: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
   id: PropTypes.number.isRequired,
   de: PropTypes.string.isRequired,
}
Note.defaultProps = {

    postType: 'posts',
  }

const mapDispatchToProps = dispatch => ({
    deleteNote: (id) => dispatch(deleteNoteAction(id))
})

export default connect(null, mapDispatchToProps)(Note);
