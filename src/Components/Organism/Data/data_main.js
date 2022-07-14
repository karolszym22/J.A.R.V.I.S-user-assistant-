import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components'
import DataValue from '../../Atoms/Date/data_number'
import { weekdDays } from '../../info_data_base/week_days';

const StyledDiv = styled.div`
  width: 220px; position: absolute;
  top: 50%; left: 15%;
  height: 220px; 
  border: 10px solid rgb(0, 205, 209);
  border-radius: 100%;
  justify-content: center;
  align-items: center; 
  display: flex; 
  box-shadow: rgba(65, 167, 235, 0.2) 0px 0px 50px 15px, rgba(2, 255, 255, 0.2) 0px 0px 70px 15px inset;

`;

const DataMain = () => {

  const [dayName, setDayName] = useState('')
  const date = new Date();

  useEffect(() => {
    setDayName(weekdDays[date.getDay()-1]);

  })



  return(
    <StyledDiv>
      <DataValue>{dayName}</DataValue>
    </StyledDiv>
    
  )
}

export default DataMain