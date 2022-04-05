import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
src: url('Avengers/Stark-6p31.ttf');
*, *::before, *::after
{
    box-sizing: border-box;
}
body {
    font-family: 'Avengers';
    background-color: black ;
}
 
`;

export default GlobalStyle;
