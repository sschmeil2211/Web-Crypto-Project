import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './views/Home';
import Card from './views/Card';
import Carousel from './views/CarouselV';
import AboutUs from './views/AboutUs';
import Footer from './components/Footer';
import Login from './views/Login';
import Dashboard from './views/DashBoard'


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
          <Route path="/card" element={<Card/>}></Route>
        </Routes>

        <Routes>
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>

        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>

        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>  

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
