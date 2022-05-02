import React  from 'react'
import MainTemplate from '../../Templates/MainTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Help from '../Help/help'
import Notes from '../Notes/note'
import Weather from '../Weather/weather'
import Main from '../Main/main'
import { Provider } from 'react-redux';
import store from '../../../store/index'
const Root = () =>
( 

<Provider store={store}>
  <BrowserRouter>
  <MainTemplate>
  
     <Routes>
           <Route exact path='/' element= {<Main/>}/>
           <Route  path='/Notes' element = {<Notes/>}/>
           <Route  path='/Weather' element = {<Weather/>}/>
           <Route  path='/Help' element = {<Help/>}/>
     </Routes>
    
  </MainTemplate>
  </BrowserRouter>
</Provider>
)

export default Root;