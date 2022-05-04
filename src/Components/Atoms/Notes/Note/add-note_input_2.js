import styled from 'styled-components'

const input = styled.input`
  font-size: 16px;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: 4px solid  rgb(0, 205, 209);
  border-radius: 15px ;
  color: rgb(0, 205, 209);
  height: 40px;
  width: 260px ;
  margin: 10px 0px;
  padding: 0 10px;
  &::placeholder {
       content: "asdasd" ;
       color: rgb(0,206,209,0.42);

   }

`;

export default input;