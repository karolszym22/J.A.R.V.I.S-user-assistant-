import React from 'react';
import styled from 'styled-components'

const StyledP_2 = styled.p`
  color: rgb(0, 205, 209); margin: 0px 7.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
`;

const NotesData = ({content}) => 
(
  <StyledP_2>{content}</StyledP_2>
);



export default NotesData;
