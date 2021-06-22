
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import CarWidget from './components/CarWidget';
import ItemListContainer from './components/ItemListContainer';

function App(params) {
  
  return (
    <div className="App">
      <div className="container">
        <NavBar menu1={'Uno'} menu2={'dos'} menu3={'tres'} icocar={<CarWidget/>}/>
      
        <ItemListContainer/>
      </div>  
      
    </div>
  );
  
}

export default App;
