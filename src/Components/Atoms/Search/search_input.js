import styled from 'styled-components'

const StyledInput = styled.input`
height: 100% ;
margin: 0px ;
width: 100% ;
display: block;
background: transparent;
border: none;
color: rgba(0,206,209,0.42) ;
border-radius: 20px ;
padding: 0px 20px;
::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(0,206,209,0.42);
  }
&:focus {
        outline: none;
        box-shadow: 0px 0px 2px red;
    }
`;

export default StyledInput
