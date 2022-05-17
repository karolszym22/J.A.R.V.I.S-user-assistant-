import React from 'react'
import styled from 'styled-components';
import SearchInformation from  '../Organism/Search/search_information'
import SearchTitle from '../Atoms/Notes/notes_title'

const StyledDiv = styled.div`
  width: 100%;  display: flex; flex-direction: column; 
  align-items: center; color: rgb(80, 208, 228);
  height: 300px;
  `;
const StyledDiv_2 = styled.div`
  width: 50%;  display: flex; flex-direction: column; 
  align-items: center; color: rgb(80, 208, 228);
  border: 5px solid rgb(0, 205, 209) ;
  height: 45px ;
  border-radius: 20px ;
  `;
  
  


const SearchTemplete = () =>
(
    <StyledDiv>
      
        <SearchTitle>Wikipedia</SearchTitle>
        <StyledDiv_2>
        <SearchInformation></SearchInformation>
       </StyledDiv_2> 
    </StyledDiv>
  
    
)

export default SearchTemplete;