
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';



import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList.js';

function App(params) {
  const addToCart = function(quantity){console.log('Se agregaron '+ quantity + ' unidades al carrito')}
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
