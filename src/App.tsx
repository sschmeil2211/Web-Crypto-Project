import React from 'react';

import './App.css';


import NavBar from './components/NavBar';
import Home from './views/Home';
import Carrousel from './views/Carrousel';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Carrousel/>
    </div>
  );
}

export default App;
