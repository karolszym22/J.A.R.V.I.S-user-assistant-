import React from "react";
import NoteContainer from '../../Organism/Notes/Note/note_main'
import NotesTemplete from "../../Templates/NotesTemplate";
import { connect } from "react-redux";




const Note = ({notes}) =>
(
 <NotesTemplete>
     {notes.map(({title, content, id}) =>(
        <NoteContainer
        id= {id}
        title={title}
        content={content}
        key = {id}
        
        />
     ))}
     

    
</NotesTemplete> 
);

const mapStateToProps = state => {
    const {notes} = state;
    return {notes};
}

;
export default connect(mapStateToProps)(Note);
