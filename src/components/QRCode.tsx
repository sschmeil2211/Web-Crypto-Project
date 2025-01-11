import { QRCodeSVG } from "qrcode.react";
import React from "react";

const QRGenerator: React.FC = () => {
  const url = "https://play.google.com/store" 
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <div
        style={{
          borderRadius: "20px", // Radio de las esquinas
          overflow: "hidden",   // Esto asegura que el contenido respete el radio
          padding: "10px",      // Espacio extra para margen
          background: "#fff",   // Fondo del contenedor
        }}
      >
        <QRCodeSVG
          value={url}
          size={150}    // Tamaño del QR
          fgColor="#000000"
          bgColor="#ffffff"
        />
      </div>
    </div>
  );
};

export default QRGenerator;