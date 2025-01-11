import React, {useState} from "react";
import logo from '../assets/Images/logo.png'
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {

    return (
      <nav className="navbar">
        <div className="logo-title">
          <img className="image" src={logo} alt="imagen"></img>
          <span className="title">Cripto Web</span>
        </div>
        <div className="nav-links">
                <Link to="/">
                  Inicio
                </Link>
                <a href="#">Tarjeta</a>
                <Link to="/about-us">
                  Nosotros
                </Link>
                <a href="#">Dashboard</a>
                <button className="button">Ingresar</button>
        </div>       
           
      </nav>
    );
  };

export default NavBar;