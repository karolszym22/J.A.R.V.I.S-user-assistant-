import React  from 'react'
import MainTemplate from '../../Templates/MainTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Help from '../Help/help'
import Notes from '../Notes/note'
import Weather from '../Weather/weather'
import Main from '../Main/main'
import Reactor from '../Reactor/reactor'
import { Provider } from 'react-redux';
import store from '../../../store/index'
import Search from '../Search/Search'
const Root = () =>
( 

<Provider store={store}>
  <BrowserRouter>
  <MainTemplate>
  
     <Routes>
           <Route exact path='/' element= {<Reactor />}/>
           <Route  path='/Notes' element = {<Notes/>}/>
           <Route  path='/Weather' element = {<Weather/>}/>
           <Route  path='/Help' element = {<Help/>}/>
           <Route  path='/Szukaj' element = {<Search/>}/>
     </Routes>
    
  </MainTemplate>
  </BrowserRouter>
</Provider>
)

export default Root;