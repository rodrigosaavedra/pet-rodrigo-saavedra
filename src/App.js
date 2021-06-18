
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';

function App(params) {
  
  return (
    <div className="App">
      <div className="container">
        <NavBar menu1={'Uno'} menu2={'dos'} menu3={'tres'}/>
      </div>  
    </div>
  );
  
}

export default App;
