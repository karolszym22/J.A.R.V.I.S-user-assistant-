import styled from 'styled-components'
import { keyframes } from 'styled-components'
const spinning= props => keyframes`
  0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
`;
const StyledDiv_3 = styled.div`
  width: 95%; height: 95%; box-sizing: border-box; 
  border-width: 13px 15px; border-style: solid; 
  border-color: rgba(0, 0, 0, 0) rgb(53, 121, 224); 
  border-image: initial; position: relative; 
  border-radius: 500px; z-index: 1; animation: 1.5s linear 0s infinite reverse none running spinning;
  animation: ${p => spinning(p)} 1s linear infinite;
`;

export default StyledDiv_3