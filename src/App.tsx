import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './views/Home';
import Carousel from './views/CarouselV';
import AboutUs from './views/AboutUs';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>

        <Routes>
          <Route path="/" element={<Carousel/>}></Route>
        </Routes>

        <Routes>
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
          
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
