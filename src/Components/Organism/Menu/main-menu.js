import React from 'react';
import styled from 'styled-components'
import MenuContainer from '../../Molecules/Menu/menu_container';
import MenuNav from '../../Atoms/Menu/menu_nav'
import {NavLink} from 'react-router-dom';

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Menu = () =>
(   
    <StyledDiv>
        
        <MenuContainer>
              <MenuNav as={NavLink} to="/">Interfejs</MenuNav>
              <MenuNav as={NavLink} to="/Szukaj">Wikipedia</MenuNav>
              <MenuNav as={NavLink} to="/Weather">Pogoda</MenuNav>
              <MenuNav as={NavLink} to="/Notes">Notatki</MenuNav>
              <MenuNav as={NavLink} to="/Help">Pomoc</MenuNav>
              
        </MenuContainer>
    </StyledDiv>
)


export default Menu