import React from "react";
import logo from '../assets/Images/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/authSlice";

const NavBar: React.FC = () => {
    const isLoggedIn = useSelector ((state: RootState) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleLogout = () => {
      dispatch(logout());
      localStorage.removeItem("token");
      navigate("/login");
      window.location.reload();
    };

    return (
      <nav className="navbar">
        <div className="logo-title">
          <img className="image" src={logo} alt="imagen"></img>
          <span className="title">Cripto Web</span>
        </div>
        <div className="nav-links">
                {isLoggedIn ? (
                  <><a href="#">Transacciones</a>
                  <a href="#">Inversiones</a>
                  <a href="#">Billetera</a>
                  <a href="#">Configuraciones</a>
                  <button onClick={handleLogout} className="button">
              Salir
            </button></>
                 ):(
                <>
                 <Link to="/">
                  Inicio
                </Link>
                <Link to="/card">
                  Tarjeta
                </Link>
                <Link to="/about-us">
                  Nosotros
                </Link>
                <Link to ="/dashboard">
                  Dashboard
                </Link>
                <Link to="/login">
                <button className="button"> Ingresar</button>
                </Link>
                </>
                 )}
        </div>       
           
      </nav>
    );
  };

export default NavBar;