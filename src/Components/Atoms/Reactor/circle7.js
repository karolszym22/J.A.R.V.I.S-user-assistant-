import styled from 'styled-components'
import { keyframes } from 'styled-components'

const spinning= props => keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const StyledDiv_7 = styled.div`
  width: 36%; height: 36%; border-width: 12px 12px; border-style: solid; border-color: rgba(0, 0, 0, 0) rgb(114, 171, 255); border-image: initial; border-radius: 100%; position: absolute;
  animation: ${p => spinning(p)} 1s linear infinite;
`;

export default StyledDiv_7