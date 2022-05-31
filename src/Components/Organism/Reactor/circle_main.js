import React from 'react';
import styled from 'styled-components'
import CircleContainer from '../../Molecules/Reactor/circle_container'
import CircleElementOne from '../../Atoms/Reactor/circle3' 
import CircleElementTwo from '../../Atoms/Reactor/circle4' 
import CircleElementThree from '../../Atoms/Reactor/circle5'
import CircleElementFour from '../../Atoms/Reactor/circle6'
import CircleElementFive from '../../Atoms/Reactor/circle7'
import CircleElementSix from '../../Atoms/Reactor/circle8'

const StyledDiv = styled.div`
  margin-top: 200px; width: 260px; height: 260px; border-radius: 100%; display: flex; justify-content: center; align-items: center; position: relative; box-shadow: rgba(65, 167, 235, 0.2) 0px 0px 50px 15px, rgba(2, 255, 255, 0.2) 0px 0px 70px 15px inset;
`;




const Reactor = () =>
(
  <StyledDiv>
    <CircleContainer>
       <CircleElementOne></CircleElementOne>
       <CircleElementTwo></CircleElementTwo>
       <CircleElementThree></CircleElementThree>
       <CircleElementFour ></CircleElementFour>
       <CircleElementFive></CircleElementFive>
       <CircleElementSix></CircleElementSix>
    </CircleContainer>
  </StyledDiv>
)

export default Reactor