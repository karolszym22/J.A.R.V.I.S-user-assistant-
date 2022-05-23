import styled,{ keyframes } from 'styled-components'
import React from 'react'
import NotesElementOne from '../../../Atoms/Notes/notes_rectangle_1'
import NotesElementTwo from '../../../Atoms/Notes/notes_rectangle_2'
import NotesData from '../../../Atoms/Notes/notes_data'
import NotesContainer from '../../../Molecules/Notes/notes_container' 
import { connect } from "react-redux";

const opacity = keyframes`
  0%{
    opacity: 0;
    display: none;
  }
  50%{
    opacity: 0.5;
    
  }
  100%{
    
    opacity: 1;
    
  }
`;
const StyledDiv = styled.div`
  width: 240px; border-width: 2px; 
  border-style: solid; border-color: rgba(0, 206, 209, 0) rgba(0, 206, 209, 0) rgba(0, 206, 209, 0) rgb(0, 205, 209);
   border-image: initial;
   height: 220px ;
    position: absolute; right: 15%; top: 60%; color: rgb(0, 205, 209);
    animation: ${opacity} 5s linear;
`;

const NotesMenu = ({notes}) =>
(
 <StyledDiv>
     <NotesElementOne></NotesElementOne>
     <NotesElementTwo></NotesElementTwo>
     <NotesContainer>
     {notes.map(({content, id}) =>(
        <NotesData
        content={content}
        key = {id}
        
        />
     ))}
     </NotesContainer>
  </StyledDiv> 
)






const mapStateToProps = state => {
    const {notes} = state;
    return {notes};
}

;
export default connect(mapStateToProps)(NotesMenu);



