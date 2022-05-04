import styled from 'styled-components'
import NotesTitle from '../../../Atoms/Notes/notes_title'
import NotesElementOne from '../../../Atoms/Notes/notes_rectangle_1'
import NotesElementTwo from '../../../Atoms/Notes/notes_rectangle_2'
import NotesData from '../../../Atoms/Notes/notes_data'
import NotesContainer from '../../../Molecules/Notes/notes_container' 

const StyledDiv = styled.div`
  width: 240px; border-width: 2px; 
  border-style: solid; border-color: rgba(0, 206, 209, 0) rgba(0, 206, 209, 0) rgba(0, 206, 209, 0) rgb(0, 205, 209);
   border-image: initial;
   height: 220px ;
    position: absolute; right: 15%; top: 60%; color: rgb(0, 205, 209);
`;

const NotesMenu = () =>
(
 <StyledDiv>
     <NotesElementOne></NotesElementOne>
     <NotesElementTwo></NotesElementTwo>
     <NotesContainer>
        <NotesData></NotesData>
        <NotesData></NotesData>
        <NotesData></NotesData>
     </NotesContainer>
  </StyledDiv> 
)

export default NotesMenu;

