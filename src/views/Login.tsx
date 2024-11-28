import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setEmail, setPassword, setMessage, clearFields } from "../redux/loginSlice";
import axios from "axios";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import QRGenerator from "../components/QRCode";

const Login: React.FC = () => {
  const { email, password, message } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  interface LoginResponse {
    message: string;
    token: string;
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post<LoginResponse>("http://localhost:5000/auth/login", {
        email,
        password,
      });

      dispatch(login());
      dispatch(setMessage(response.data.message));
      dispatch(clearFields());
      navigate("/"); 
    } catch (error) {
      dispatch(setMessage("Error en el login"));
    }
  };

  return (
    <div className="login">
      <div className="left">
        <h4>
          Gestiona tus criptos <br />
          de forma <br /> segura y sencilla
          <br />
        </h4>
      </div>

      <div className="right">
        <h3>Ingresa tus datos</h3>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        <button className="button2" onClick={handleLogin}>
          Iniciar sesión
        </button>
        <p className="register">
          ¿No tienes una cuenta?
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="to playstore noreferrer"
            className="link"
          >
            Registrate gratis
          </a>
        </p>
        <QRGenerator/>
        <p className="qr-p">O escanea el QR</p>
      </div>
    </div>
  );
};

export default Login;