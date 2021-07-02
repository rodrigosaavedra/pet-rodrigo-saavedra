
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navbar/NavBar';
import ItemList from './components/home/ItemList.js';

function App(params) {
  return (
    <div className="App">
      <div className="container">
        <NavBar menu1={'Uno'} menu2={'dos'} menu3={'tres'}/>     
      
        <ItemList/>
      </div>  
      
    </div>
  );
  
}

export default App;
