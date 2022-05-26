import styled,{ keyframes } from 'styled-components'
import React from 'react'
import TimeContainer from '../../Molecules/Time/time_container'
import TimeCircle from '../../Atoms/Time/time_circle'
import TimeData from '../../Atoms/Time/time_data'
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
  width: 160px; position: absolute; top: 15%; left: 15%; height: 160px; 
  border: 10px solid rgb(0, 205, 209); border-radius: 100%; justify-content: center; 
  align-items: center; display: flex; 
  animation: ${opacity} 2s ease-out;
  animation-fill-mode: forwards;
  opacity: 0 ;
  animation-delay: 1s;
  box-shadow: rgba(65, 167, 235, 0.2) 0px 0px 50px 15px, rgba(2, 255, 255, 0.2) 0px 0px 70px 15px inset;
`;


const TimeMenu = () =>
{
  
    const [date, setDate] = React.useState(new Date());
  
   React.useEffect(() => {
    var timerID = setInterval( () => Timer(), 1000 );
    return () => {
        clearInterval(timerID);
      };
    });
  
     const Timer = () => {
      setDate(new Date());
     }

   return(
        <StyledDiv>
          <TimeContainer>
            <TimeCircle>
                 <TimeData>{date.getHours()}:{(date.getMinutes() < 10) ? '0' : ''}{date.getMinutes()}</TimeData>
            </TimeCircle>
         </TimeContainer>
        </StyledDiv>  
        )
  
}

export default TimeMenu;
