import React from 'react'
import styled from 'styled-components';
import SearchInformation from  '../Organism/Search/search_information'
import SearchTitle from '../Atoms/Notes/notes_title'

const SearchContainer = styled.div`
  width: 100%;  display: flex; flex-direction: column; 
  align-items: center; color: rgb(80, 208, 228);
  height: 300px;
  `;
const SearchForm = styled.div`
  width: 50%;  display: flex; flex-direction: column; 
  align-items: center; color: rgb(80, 208, 228);
  height: 45px ;
  border-radius: 20px ;
  position: relative;
  `;
  
  


const SearchTemplete = () =>
(
    <SearchContainer>
      <SearchTitle>Wikipedia</SearchTitle>
        <SearchForm>
           <SearchInformation></SearchInformation>
       </SearchForm> 
    </SearchContainer>
  
    
)

export default SearchTemplete;