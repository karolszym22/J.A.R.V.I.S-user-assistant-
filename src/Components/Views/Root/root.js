import React  from 'react'
import MainTemplate from '../../Templates/MainTemplate';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Help from '../Help/help'
import Notes from '../Notes/note'
import Weather from '../Weather/weather'
import Reactor from '../Reactor/reactor'
import { Provider } from 'react-redux';
import store from '../../../store/index'
import Search from '../Search/Search'
import SpeechProvider  from '../../../context/SpeechContext';
const Root = () =>
{



  return(<Provider store={store}>
  <BrowserRouter>
    <SpeechProvider>
     <MainTemplate>
       <Routes>
             <Route exact path='/' element= {<Reactor />}/>
             <Route  path='/notes' element = {<Notes/>}/>
             <Route  path='/weather' element = {<Weather/>}/>
             <Route  path='/help' element = {<Help/>}/>
             <Route  path='/szukaj' element = {<Search/>}/>
       </Routes>
      </MainTemplate>
    </SpeechProvider>
   </BrowserRouter>
 
  </Provider>)

}




export default Root;