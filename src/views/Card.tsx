import React from "react";
import card from "../assets/Images/card.png";
import InfoItem from "../components/InfoItem";
import { Link } from "react-router-dom";

const Card: React.FC = () => {
  return (
    <div className="seccion-tarjeta">

      <div className="texto-superior">
        <h1>Tarjeta WebPay</h1>
        <p>Conectá tus criptos con el mundo real</p>
      </div>

     
      <div className="contenido-principal">
  
        <div className="contenedor-lateral">
          <InfoItem
            title="Historial y Control Financiero"
            description="Revisá y gestioná tus transacciones con detalle"
            startSide="right"
          />
          <InfoItem
            title="Descuentos y Recompensas"
            description="Ganá cashback o descuentos en criptomonedas"
            startSide="right"
          />
          <InfoItem
            title="Retiro en Cajeros"
            description="Retirá efectivo en cualquier cajero usando criptomonedas"
            startSide="right"
          />
        </div>

       
        <div className="tarjeta-central">
          <img src={card} alt="Tarjeta" />
        </div>

      
        <div className="contenedor-lateral">
          <InfoItem
            title="Pagos con Criptomonedas"
            description="Pagá con cualquier cripto disponible en tu cuenta"
            startSide="left"
          />
          <InfoItem
            title="Conversión Instantánea"
            description="Tus pagos se convierten en tiempo real al momento del pago"
            startSide="left"
          />
          <InfoItem
            title="Sincronización con Wallet"
            description="La tarjeta está vinculada a tu billetera digital de la app"
            startSide="left"
          />
        </div>
      </div>

   
      <div className="texto-inferior">
        <p>Compra, paga, retira. Fácil y rápido.</p>
        <Link to= '/login'>
        <button type="button" >
          Activa tu tarjeta
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;