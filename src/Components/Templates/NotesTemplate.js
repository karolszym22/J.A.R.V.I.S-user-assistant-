import React from 'react'
import styled from 'styled-components';
import NotesTitle from '../Atoms/Notes/notes_title'
import AddNotes from '../Organism/Notes/Note/add_note_main';
const StyledDiv = styled.div`
  width: 100%;  display: flex; flex-direction: column; 
  align-items: center; color: rgb(80, 208, 228);`;
const StyledDiv_2 = styled.div`
  width: 90%; border-width: 7.5px; border-style: solid; 
  border-color: rgb(80, 208, 228) rgba(80, 208, 228, 0) rgba(80, 208, 228, 0);
   border-image: initial;  display: flex; padding: 10px; flex-wrap: wrap;
`;


const NotesTemplete = ({children}) =>
(
    <StyledDiv>
        <NotesTitle>Notes</NotesTitle>
           <StyledDiv_2>
             <>
               {children}
             </>
          </StyledDiv_2>
          <AddNotes></AddNotes>
    </StyledDiv>
  
    
)

export default NotesTemplete;