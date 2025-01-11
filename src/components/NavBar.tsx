import React, {useState} from "react";
import logo from '../assets/Images/logo.png'

const NavBar: React.FC = () => {

    return (
      <nav className="navbar">
        <div className="logo-title">
          <img className="image" src={logo} alt="imagen"></img>
          <span className="title">Cripto Web</span>
        </div>
        <div className="nav-links">
                <a href="#">Inicio</a>
                <a href="#">Tarjeta</a>
                <a href="#">Nosotros</a>
                <a href="#">Dashboard</a>
                <button className="button">Ingresar</button>
        </div>       
           
      </nav>
    );
  };

export default NavBar;